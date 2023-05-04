## FILE UPLOAD TUTORIAL

### DESCRIPTION
This is a simple project that shows how files can be uploaded easily to the server
It uses express framework, and multer for uploads
It can either use Cloudinary(set by default) for file storage or the server
To use the server as storage,
- comment out dest:'/tmp/', and uncomment // dest: 'uploads/',
### HOW TO INSTALL
```
npm install
```

### HOW TO START SERVER
It runs on port 3000
```
npm start
```
or 
```
nodemon ./server.js
```