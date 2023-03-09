const FormData = require('form-data');
const http = require('https');

const form = new FormData();
const fs = require('fs');

form.append('bg_blur', '0');
form.append('scale', 'fit');
form.append('format', 'PNG');
form.append('output_type', 'cutout');
form.append('image', fs.createReadStream('4.JPG'));
const options = {
  method: 'POST',
  hostname: 'api.picsart.io',
  port: null,
  path: '/tools/1.0/removebg',
  headers: {
    accept: 'application/json',
    ...form.getHeaders(),
  },
};
const req = http.request(options, function (res) {
  const chunks = [];
  res.on('data', function (chunk) {
    chunks.push(chunk);
  });
  res.on('end', function () {
    const body = Buffer.concat(chunks);
    console.log(body.toString());
  });
});
req.on('error', (e) => {
  console.error(e);
});
form.pipe(req);
