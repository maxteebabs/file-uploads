const express = require('express');
const multer = require('multer');
const { uploadFile } = require('./services/FileService');
const app = express();


const fileFilter = (req, file, cb) => {
  if (!file.originalname.match(/\.(jpg|jpeg|png)$/)) {
    const error = new Error('Only .jpg, .jpeg and .png files are allowed!');
    return cb(error, false);
  }
  cb(null, true);
};

const upload = multer({ 
  dest:'/tmp/',
  // dest: 'uploads/',
  fileFilter: fileFilter,
  limits: { fileSize: 1000000 } // limit file size to 1 MB
});

// Set up a route to handle file uploads
app.post('/upload', upload.single('file'), function(req, res) {
  console.log('file upload', req.file)
  res.send('File uploaded successfully!');
});

app.post('/upload-external', upload.single('file'), async(req, res) => {
  try{
    const { file } = req;
    if(!file) throw new Error('Invalid Request')
    fileResponse = await uploadFile(file);
    console.log('file uploaded response', fileResponse)
    res.send({ message: 'File uploaded successfully!', url: fileResponse.url });
  }catch(err) {
    res.status(500).send(err.message);
  }
});

// Set up error handling middleware
app.use((err, req, res, next) => {
  if (err instanceof multer.MulterError) {
    res.status(400).send('File size exceeds limit.');
    // res.status(400).send({message: err.message})
  } else {
    next(err);
  }
});

// Start the server
app.listen(3000, function() {
  console.log('Server listening on port 3000.');
});
