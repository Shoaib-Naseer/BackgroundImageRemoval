import FormData from 'form-data';
import fs from 'fs';
import fetch from 'node-fetch';

const YOUR_API_KEY =
  '078a4fbf8531337952b8418573603377bb1db55f35d44804a336ae7e650d9663e04cc81d08d7b1b6972b88732e63fbb0';

// Parse args: path or URL to image.
const image =
  process.argv[2] ||
  'https://cdn.pixabay.com/photo/2016/02/13/13/11/oldtimer-1197800_960_720.jpg';

// Preapare request: form.
const form = new FormData();
if (image.includes('://')) {
  // Data from image URL.
  form.append('url', image);
} else {
  // Data from local image file.
  const fileName = path.basename(image);
  form.append('image', fs.readFileSync(image), fileName);
}

fetch('https://clipdrop-api.co/remove-background/v1', {
  method: 'POST',
  headers: {
    'x-api-key': YOUR_API_KEY,
  },
  body: form,
})
  .then((response) => response.arrayBuffer())
  .then((buffer) => {
    // buffer here is a binary representation of the returned image
    const base64 = Buffer.from(buffer, 'base64');
    console.log(base64);
    // fs.writeFileSync('new-path.jpg', buffer);
  });
