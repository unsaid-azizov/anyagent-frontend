#!/bin/bash

# Generate favicons from 1.png
set -e

echo "🎨 Generating favicons from /home/astex/projects/speech0land/public/images/1.png..."

# Check if ImageMagick is installed
if ! command -v convert &> /dev/null; then
    echo "📦 Installing ImageMagick..."
    sudo apt-get update -qq
    sudo apt-get install -y imagemagick
fi

INPUT_IMAGE="/home/astex/projects/speech0land/public/images/1.png"
OUTPUT_DIR="/home/astex/projects/speech0land/app"

# Generate favicon.ico (multi-size ICO file)
echo "📝 Generating favicon.ico..."
convert "$INPUT_IMAGE" -resize 256x256 \
    \( -clone 0 -resize 16x16 \) \
    \( -clone 0 -resize 32x32 \) \
    \( -clone 0 -resize 48x48 \) \
    -delete 0 -alpha on -background none \
    "$OUTPUT_DIR/favicon.ico"

# Generate apple-touch-icon (180x180)
echo "📝 Generating apple-touch-icon.png..."
convert "$INPUT_IMAGE" -resize 180x180 \
    -alpha on -background none \
    "$OUTPUT_DIR/apple-touch-icon.png"

# Generate icon for web app manifest (192x192)
echo "📝 Generating icon-192.png..."
convert "$INPUT_IMAGE" -resize 192x192 \
    -alpha on -background none \
    "$OUTPUT_DIR/icon-192.png"

# Generate icon for web app manifest (512x512)
echo "📝 Generating icon-512.png..."
convert "$INPUT_IMAGE" -resize 512x512 \
    -alpha on -background none \
    "$OUTPUT_DIR/icon-512.png"

echo ""
echo "✅ Favicons generated successfully!"
echo ""
echo "Generated files:"
echo "  - $OUTPUT_DIR/favicon.ico"
echo "  - $OUTPUT_DIR/apple-touch-icon.png"
echo "  - $OUTPUT_DIR/icon-192.png"
echo "  - $OUTPUT_DIR/icon-512.png"
echo ""
echo "Next.js will automatically use these files from the app directory."
