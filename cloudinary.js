const cloudinary = require('cloudinary').v2;

// Configuration
cloudinary.config({
  cloud_name: 'dkaxwp8ub',
  api_key: '646641936384627',
  api_secret: 'Vr3xET6n7uQBVRwwF3T18RgyBqY',
});

// Upload

const res = cloudinary.uploader.upload(
  'https://upload.wikimedia.org/wikipedia/commons/a/ae/Olympic_flag.jpg',
  {
    public_id: 'olympic_flag',
    // This will actually remove the background and then save it in cloudinary
    background_removal: 'cloudinary_ai'
  }
);

res
  .then((data) => {
    console.log(data);
    console.log(data.secure_url);
  })
  .catch((err) => {
    console.log(err);
  });

// Generate
const url = cloudinary.url('olympic_flag', {
  width: 100,
  height: 150,
  Crop: 'fill',
});

// The output url
console.log(url);
// https://res.cloudinary.com/<cloud_name>/image/upload/h_150,w_100/olympic_flag
