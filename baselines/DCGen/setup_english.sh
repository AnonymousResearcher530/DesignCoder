#!/bin/bash

# Setup DCGen environment
echo "Setting up DCGen environment..."

# Install dependencies
echo "Installing dependencies..."
pip install -r requirements.txt

# Create necessary directories
echo "Creating necessary directories..."
mkdir -p examples/images results

echo "DCGen setup complete!"
echo "You can now place your UI images in examples/images/ directory."
echo "Use run_baseline.sh or run_baseline_english.sh to process the images." 