var axios = require('axios');
var FormData = require('form-data');
var fs = require('fs');
var data = new FormData();
data.append('image_file', fs.createReadStream('/C:/Users/my pc/Desktop/carsss.jpg'));

var config = {
  method: 'post',
maxBodyLength: Infinity,
  url: 'https://clipdrop-api.co/remove-background/v1',
  headers: { 
    'x-api-key': '078a4fbf8531337952b8418573603377bb1db55f35d44804a336ae7e650d9663e04cc81d08d7b1b6972b88732e63fbb0', 
    ...data.getHeaders()
  },
  data : data
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});
