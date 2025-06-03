import json
import urllib.request
import os
from copy import deepcopy
from collections import defaultdict
from argparse import ArgumentParser
import requests


class FigmaFileLoader:
    """Load `Figma` file."""

    def __init__(
        self,
        access_token: str,
        rootid: str,
        ids: str,
        key: str,
        material_folder: str = "material_folder_name",
    ):
        """Initialize with access token, ids, and key.

        Args:
            access_token: The access token for the Figma REST API.
            ids: The ids of the Figma file.
            key: The key for the Figma file
        """
        self.access_token = access_token
        self.rootid = rootid  # node_id
        self.ids = ids
        self.key = key  # file_id
        self.assets_folder = f"{material_folder}/assets"
        os.makedirs(self.assets_folder, exist_ok=True)
        self.material_folder = material_folder
        self.geometry_to_img_types = [
            "STAR",
            "LINE",
            "VECTOR",
            "ELLIPSE",
            "REGULAR_POLYGON",
        ]

    def _construct_figma_api_url(self) -> str:
        if self.key is None or self.rootid is None:
            raise ValueError("Key and rootid must be provided.")
        api_url = "https://api.figma.com/v1/files/%s/nodes?ids=%s" % (
            self.key,
            self.rootid,
        )

        return api_url

    def process_figma_file(self, json_data: dict):
        all_nodes = {}
        root_bounds = json_data["absoluteBoundingBox"]
        node_boundingbox = {}
        node_boundingbox["root"] = [0, 0, root_bounds["width"], root_bounds["height"]]
        text_and_images = {}

        def dfs(cur_node):
            if "visible" in cur_node.keys() and not cur_node["visible"]:
                return
            if "merge" in cur_node["name"] or "BOOLEAN" in cur_node["type"]:
                node = deepcopy(cur_node)
                node["id"] = node["id"].replace(":", "-")
                if "children" in node.keys():
                    del node["children"]
                del node["absoluteRenderBounds"]

                node["absoluteBoundingBox"]["x"] = (
                    node["absoluteBoundingBox"]["x"] - root_bounds["x"]
                )
                node["absoluteBoundingBox"]["y"] = (
                    node["absoluteBoundingBox"]["y"] - root_bounds["y"]
                )
                node_boundingbox[node["id"]] = [
                    node["absoluteBoundingBox"]["x"],
                    node["absoluteBoundingBox"]["y"],
                    node["absoluteBoundingBox"]["width"],
                    node["absoluteBoundingBox"]["height"],
                ]
                all_nodes[node["id"]] = node
                self.ids += f"{node['id']},"  # download merged images
                return

            if "CONTAINER" in cur_node["name"]:
                node = deepcopy(cur_node)
                node_boundingbox[node["id"].replace(":", "-")] = [
                    node["absoluteBoundingBox"]["x"] - root_bounds["x"],
                    node["absoluteBoundingBox"]["y"] - root_bounds["y"],
                    node["absoluteBoundingBox"]["width"],
                    node["absoluteBoundingBox"]["height"],
                ]
                node["absoluteBoundingBox"]["x"] = (
                    node["absoluteBoundingBox"]["x"] - root_bounds["x"]
                )
                node["absoluteBoundingBox"]["y"] = (
                    node["absoluteBoundingBox"]["y"] - root_bounds["y"]
                )
                del node["absoluteRenderBounds"]
                all_nodes[node["id"].replace(":", "-")] = node

            if "TEXT" in cur_node["type"]:
                text_and_images[cur_node["id"].replace(":", "-")] = (
                    "TEXT-" + cur_node["characters"]
                )

            if (
                "IMAGE" in cur_node["type"]
                or cur_node["type"] in self.geometry_to_img_types
            ):
                text_and_images[cur_node["id"].replace(":", "-")] = "IMAGE"
                self.ids += f"{cur_node['id']},"

            if "fills" in cur_node.keys() and len(cur_node["fills"]) > 0:
                for fill in cur_node["fills"]:
                    if fill["type"] == "IMAGE":
                        text_and_images[cur_node["id"].replace(":", "-")] = "IMAGE"
                        self.ids += f"{cur_node['id']},"
                        break

            if "children" in cur_node.keys() and len(cur_node["children"]) > 0:
                for child in cur_node["children"]:
                    dfs(child)
            elif "visible" not in cur_node.keys() or cur_node["visible"]:
                node = deepcopy(cur_node)
                node["id"] = node["id"].replace(":", "-")
                node["absoluteBoundingBox"]["x"] = (
                    node["absoluteBoundingBox"]["x"] - root_bounds["x"]
                )
                node["absoluteBoundingBox"]["y"] = (
                    node["absoluteBoundingBox"]["y"] - root_bounds["y"]
                )
                del node["absoluteRenderBounds"]
                node_boundingbox[node["id"]] = [
                    node["absoluteBoundingBox"]["x"],
                    node["absoluteBoundingBox"]["y"],
                    node["absoluteBoundingBox"]["width"],
                    node["absoluteBoundingBox"]["height"],
                ]
                if node["type"] == "LINE":
                    node_boundingbox[node["id"]][3] = node["strokeWeight"]
                all_nodes[node["id"]] = node
                

        dfs(json_data)
        self.ids = self.ids[:-1]
        return all_nodes, node_boundingbox, text_and_images

    def _get_figma_file(self):
        """Get Figma file from Figma REST API."""
        headers = {"X-Figma-Token": self.access_token}
        request = urllib.request.Request(
            self._construct_figma_api_url(), headers=headers
        )
        artboard_ids = []
        with urllib.request.urlopen(request) as response:
            json_data = json.loads(response.read().decode())
            # print(json_data)
            json.dump(
                json_data,
                open(
                    os.path.join(self.material_folder, "complete_data" + ".json"), "w"
                ),
            )
            page_data = json_data["nodes"][self.rootid]["document"]
            if json_data["nodes"][self.rootid]["document"]['type'] == "CANVAS":
                for child in page_data["children"]:
                    if child["type"] == "FRAME":
                        artboard_ids.append(child["id"])
                print(artboard_ids)
                return
            return self.process_figma_file(json_data["nodes"][self.rootid]["document"])

    def dump_to(self, file_name):
        """Dump Figma file to file."""
        all_nodes, node_boundingbox, text_and_images = self._get_figma_file()

        with open(os.path.join(self.material_folder, file_name + ".json"), "w") as f:
            json.dump(all_nodes, f)
        with open(
            os.path.join(self.material_folder, file_name + "-box.json"), "w"
        ) as f:
            json.dump(node_boundingbox, f)
        with open(
            os.path.join(self.material_folder, file_name + "-text_images.json"), "w"
        ) as f:
            json.dump(text_and_images, f)

    def download_img(self, url, file_name):
        urllib.request.urlretrieve(url, file_name)

    def load_artboard_image(self):
        access_img_url = (
            f"https://api.figma.com/v1/images/{self.key}?ids={self.rootid}&format=png"
        )
        headers = {"X-Figma-Token": self.access_token}
        request = urllib.request.Request(access_img_url, headers=headers)
        with urllib.request.urlopen(request) as response:
            json_data = json.loads(response.read().decode())

        for k, v in json_data["images"].items():
            self.download_img(v, f"{self.material_folder}/artboard.png")

    def load_image(self, file_name):
        print("loading image...")
        ids = self.ids.replace(";", ",")
        access_img_url = (
            f"https://api.figma.com/v1/images/{self.key}?ids={ids}&format=png"
        )
        headers = {"X-Figma-Token": self.access_token}
        print(f"Request URL: {access_img_url}")  # print request URL
        request = urllib.request.Request(access_img_url, headers=headers)
        with open(
            os.path.join(self.material_folder, file_name + "-text_images.json"), "r"
        ) as f:
            text_and_images = json.load(f)
        try:
            with urllib.request.urlopen(request) as response:
                json_data = json.loads(response.read().decode())
            for k, v in json_data["images"].items():
                file_name = k.replace(":", "-")
                print("downloading ", file_name)

                try:
                    self.download_img(v, f"{self.assets_folder}/{file_name}.png")
                except Exception as e:
                    print(f"Error in downloading image {k}: {e}")
        except urllib.error.HTTPError as e:
            print(f"HTTP Error: {e.code} - {e.reason}")
        except Exception as e:
            print(f"Unexpected error: {e}")


if __name__ == "__main__":
    parser = ArgumentParser()
    parser.add_argument("--node_id", type=str)
    parser.add_argument("--file_id", type=str)

    node_id = parser.parse_args().node_id
    file_id = parser.parse_args().file_id

    artboard_name = node_id

    os.makedirs("materials", exist_ok=True)
    artboard_material_folder = f"materials/{artboard_name}"
    os.makedirs(artboard_material_folder, exist_ok=True)
    
    access_token = "Your_Access_Token"
    loader = FigmaFileLoader(
        access_token=access_token,
        rootid=node_id,
        ids="",
        key=args.file_id,
        material_folder=artboard_material_folder,
    )
    # access_token: The access token for the Figma REST API.
    # ids: The ids of the Figma file.
    # key: The key for the Figma file.

    loader.dump_to(artboard_name)
    loader.load_artboard_image()
    loader.load_image(artboard_name)


