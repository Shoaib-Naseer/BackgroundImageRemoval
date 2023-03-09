const api_key = 'Fm9af1gSCd6b5zNhC3Z3fCSf';
// Requires "axios" and "form-data" to be installed (see https://www.npmjs.com/package/axios and https://www.npmjs.com/package/form-data)
const axios = require('axios');
const FormData = require('form-data');
const fs = require('fs');
const path = require('path');

const formData = new FormData();
formData.append('size', 'auto');
formData.append('image_file', fs.createReadStream('sharjeel.jpg'), 'sharjeel');

axios({
  method: 'post',
  url: 'https://api.remove.bg/v1.0/removebg',
  data: formData,
  responseType: 'arraybuffer',
  headers: {
    ...formData.getHeaders(),
    'X-Api-Key': api_key,
  },
  encoding: null,
})
  .then((response) => {
    if (response.status != 200)
      return console.error('Error:', response.status, response.statusText);
    fs.writeFileSync('no-bg.png', response.data);
  })
  .catch((error) => {
    return console.error('Request failed:', error);
  });
