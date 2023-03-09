var axios = require('axios');
var FormData = require('form-data');
var fs = require('fs');
var data = new FormData();
data.append('image_file', fs.createReadStream('Your_Image_Path'));

var config = {
  method: 'post',
  url: 'https://api.removal.ai/3.0/remove',
  headers: { 
    'Rm-Token': 'Your-Token', 
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