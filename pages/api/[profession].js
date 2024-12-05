import path from 'path';
import fs from 'fs';
import { createCanvas, loadImage, registerFont } from 'canvas'; // Install the 'canvas' package
import imageMap from '../../utils/imageMap'; // Ensure this file exists

const arialFontPath = path.join(process.cwd(), 'public/fonts/arial-font/arial.ttf');

// Register the font with a family name
registerFont(arialFontPath, { family: 'Arial' });


export default async function handler(req, res) {
  const { profession } = req.query; // Extract profession from URL

  const imagesDir = path.join(process.cwd(), 'public/assets/jhonny'); // Directory for images
  const isDefaultImage = !imageMap[profession]; // Check if using default image
  const imageFileName = isDefaultImage ? 'default.png' : imageMap[profession]; // Use default image if profession not found
  const imagePath = path.join(imagesDir, imageFileName); // Resolve the image path

  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET');

  // Check if the image file exists
  if (!fs.existsSync(imagePath)) {
    res.status(404).json({ error: 'Image not found, and fallback image is missing.' });
    return;
  }

  try {
    const baseImage = await loadImage(imagePath); // Load the image
    const extraHeight = isDefaultImage ? 100 : 0; // Add extra height only for default image
    const canvas = createCanvas(baseImage.width, baseImage.height + extraHeight); // Extend canvas height if needed
    const ctx = canvas.getContext('2d');

    // Draw the image
    ctx.drawImage(baseImage, 0, 0);

    if (isDefaultImage) {
      // Add white background for text
      ctx.fillStyle = 'white';
      ctx.fillRect(0, baseImage.height, baseImage.width, extraHeight);

      // Add two-line text below the image
      const line1 = `Oops... I can't be a ${profession}`;
      const line2 = `But I'm working on it... hardly!`;
      ctx.fillStyle = 'black';
      ctx.font = '20px Arial';
      ctx.textAlign = 'center';

      // Draw the text
      ctx.fillText(line1, baseImage.width / 2, baseImage.height + 40); // First line
      ctx.fillText(line2, baseImage.width / 2, baseImage.height + 70); // Second line
    }

    // Send the generated image as the response
    res.setHeader('Content-Type', 'image/png');
    canvas.createPNGStream().pipe(res); // Stream the generated image
  } catch (error) {
    console.error('Error generating the image with text:', error);
    res.status(500).json({ error: 'Failed to generate the image with text.' });
  }
}
