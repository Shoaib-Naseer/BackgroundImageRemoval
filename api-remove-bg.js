var axios = require('axios');
var FormData = require('form-data');
var fs = require('fs');
var data = new FormData();
data.append(
  'image_file',
  fs.createReadStream('/C:/Users/my pc/Desktop/carsss.jpg')
);

var config = {
  method: 'post',
  maxBodyLength: Infinity,
  url: 'https://api.remove.bg/v1.0/removebg',
  headers: {
    'X-Api-Key': 'Fm9af1gSCd6b5zNhC3Z3fCSf',
    ...data.getHeaders(),
  },
  data: data,
};

axios(config)
  .then(function (response) {
    console.log(JSON.stringify(response.data));
  })
  .catch(function (error) {
    console.log(error);
  });
z;
