const cloudinary = require('cloudinary').v2;


// Configuration 
cloudinary.config({
  cloud_name: "",
  api_key: "",
  api_secret: ""
});

const upload = (file) => {
  // Upload the file to Cloudinary
  const res = cloudinary.uploader.upload( file.path );
  return res;
}

module.exports = {
  uploadFile: upload
}
