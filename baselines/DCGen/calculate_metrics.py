import subprocess
import os

def install_d2c():
    # change to current directory
    os.chdir(os.path.dirname(os.path.abspath(__file__)))
    if not os.path.exists('Design2Code'):
        subprocess.run(['git', 'clone', 'https://github.com/NoviScl/Design2Code.git'])
    os.chdir('Design2Code')
    # remove unnecessary requirements
    with open('requirements.txt', 'r') as f:
        lines = f.readlines()
        # remove apex==0.9.10.dev0, flash-attn==2.5.5
        lines = [line for line in lines if 'apex' not in line and 'flash-attn' not in line]
    with open('requirements.txt', 'w') as f:
        f.writelines(lines)

    subprocess.run(['pip', 'install', '-e', '.'])
    try:
        subprocess.run(['playwright', 'install'])
    except:
        subprocess.run(['python', '-m', 'playwright', 'install'])

    # delete .git for both win and linux
    os.chdir('..')
    # if windows
    if os.name == 'nt':
        subprocess.run(['rmdir', '/s', '/q', 'Design2Code\\.git'])
    else:
        subprocess.run(['rm', '-rf', 'Design2Code/.git'])
        
def config_d2c():
    # change to current directory
    pass


import json
import pandas as pd
import numpy as np
def calculate_high_level_metrics(result_file, model="gpt4"):
    """
    file = {
        exp_name: {
            file_name:{
                    "block_match": block_match,
                    "text": text,
                    "position": position,
                    "color": color,
                    "clip": clip,
                    "bleu": bleu
                }
        
        }
    """

    data = json.load(open(result_file, "r"))
    final_score = {}
    for exp_name in data:
        final_score[exp_name] = {
            "clip": 0,
            "bleu": 0,
            "block_match": 0,
            "text": 0,
            "position": 0,
            "color": 0
        }
        for file_name in data[exp_name]:
            final_score[exp_name]["clip"] +=  data[exp_name][file_name]["clip"]
            final_score[exp_name]["bleu"] +=  data[exp_name][file_name]["bleu"]
            final_score[exp_name]["block_match"] +=  data[exp_name][file_name]["block_match"]
            final_score[exp_name]["text"] +=  data[exp_name][file_name]["text"]
            final_score[exp_name]["position"] +=  data[exp_name][file_name]["position"]
            final_score[exp_name]["color"] +=  data[exp_name][file_name]["color"]
            

        final_score[exp_name]["clip"] /= len(data[exp_name])
        final_score[exp_name]["bleu"] /= len(data[exp_name])
        final_score[exp_name]["block_match"] /= len(data[exp_name])
        final_score[exp_name]["text"] /= len(data[exp_name])
        final_score[exp_name]["position"] /= len(data[exp_name])
        final_score[exp_name]["color"] /= len(data[exp_name])

    # convert to dataframe
    final_score = pd.DataFrame(final_score).transpose()
    # organize new dataframe with columns Model, Experiment, and clip  bleu  block_match text position color
    final_score = final_score.reset_index()
    final_score.rename(columns={"index": "Experiment"}, inplace=True)
    final_score['Model'] = final_score['Experiment'].apply(lambda x: x.split("_")[-1])
    final_score['Experiment'] = final_score['Experiment'].apply(lambda x: " ".join((x.split("_"))[:-1]))
    result = final_score[['Model', 'Experiment', 'block_match', 'text', 'position', 'color']].replace("claude3", "Claude3").sort_values(by=['Model', 'Experiment'])
    result = result[result['Model'] == model]

    return result

def calculate_weakness(result):
    result.rename(columns={"block_match": "Inclusion", "position": "Organization"}, inplace=True)
    result['Fieldity'] = np.mean(result[['text', 'color']], axis=1)
    result.drop(columns=['text', 'color'], inplace=True)
    result['Omission'] = 1 - result['Inclusion']
    result['Distorsion'] = 1 - result['Fieldity']
    result['Misarrangement'] = 1 - result['Organization']
    return result[['Model', 'Experiment', 'Omission', 'Distorsion', 'Misarrangement']]

import matplotlib.pyplot as plt
def plot_fine_grain(result):
    # plot radar plot from the metrics, the axes are Omission, Distorsion, Misarrangement, and the values are the scores, the lines are the experiments
    result = result[["Experiment", "Omission", "Distorsion", "Misarrangement"]]
    # number of variables
    labels = ['Omission', 'Distorsion', 'Misarrangement']
    num_vars = len(labels)
    # Remove 'bbox describe' data
    result = result[result['Experiment'] != 'bbox describe']

    # rename the experiments
    result['Experiment'] = result['Experiment'].replace({
        'cot': 'CoT',
        'direct': 'Direct',
        'divide and conquer bbox': 'DCGen',
        'self-refine': 'Self Refine',
    })

    print(result)


def culculate_metrics(source_folders, target_folder):
    # source_folders is a list of folders containing the generated html
    


if __name__ == '__main__':
    # install_d2c()
    result = calculate_high_level_metrics("best.json")
    # result = calculate_weakness(result)
    # plot_fine_grain(result)
    print(result)
    # print(final_score)

    
 