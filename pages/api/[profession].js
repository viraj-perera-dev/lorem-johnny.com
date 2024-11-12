import path from 'path';
import fs from 'fs';
import imageMap from '../../utils/imageMap'; // Create this file to store the imageMap

export default function handler(req, res) {
  const { profession } = req.query; // Extract profession from URL

  if (!imageMap[profession]) {
    res.status(404).json({ error: 'Image not found for this profession' });
    return;
  }

  const imagesDir = path.join(process.cwd(), 'public/assets/jhonny');
  const imagePath = path.join(imagesDir, imageMap[profession]);

  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET');

  // Set the correct content type based on file extension
  const fileExtension = path.extname(imageMap[profession]).toLowerCase();
  const contentType =
    fileExtension === '.jpg' || fileExtension === '.jpeg'
      ? 'image/jpeg'
      : fileExtension === '.png'
      ? 'image/png'
      : null;

  if (!contentType) {
    res.status(400).json({ error: 'Unsupported file type' });
    return;
  }

  // Set Content-Type and stream the image
  res.setHeader('Content-Type', contentType);
  fs.createReadStream(imagePath).pipe(res);
}
