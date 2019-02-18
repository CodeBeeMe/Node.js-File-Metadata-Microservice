'use strict'

const router = require('express').Router();
const multer = require('multer');
const upload = multer().single('upfile');

//getting the metadata info from the uploaded file
router.post('/fileanalyse', (req, res, next) => {
  const file = req.file;
  console.log(file);
  upload(req, res, (err) => {
    if (err instanceof multer.MulterError) {
      // A Multer error occurred when uploading.
      next(err);
    } else if (err) {
      next(err);
      // An unknown error occurred when uploading.
    }
    file !== undefined ? 
      res.json({
      name: file.originalname,
      type: file.mimetype,
      size: file.size
    }) : next('Please select a file first'); 
    // Everything went fine.
  })
})

module.exports = router

//===============================================
