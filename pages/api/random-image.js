import path from 'path';
import fs from 'fs';

export default function handler(req, res) {
  const imagesDir = path.join(process.cwd(), 'public/assets/jhonny');

  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET');

  // Read the files in the directory
  fs.readdir(imagesDir, (err, files) => {
    if (err) {
      res.status(500).json({ error: 'Failed to retrieve images' });
      return;
    }

    // Select a random image from the files
    const randomImage = files[Math.floor(Math.random() * files.length)];
    const imagePath = path.join(imagesDir, randomImage);

    // Detect the content type based on the file extension
    const fileExtension = path.extname(randomImage).toLowerCase();
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

    // Set the Content-Type header and stream the image file
    res.setHeader('Content-Type', contentType);
    fs.createReadStream(imagePath).pipe(res); // Stream the file to the response
  });
}
