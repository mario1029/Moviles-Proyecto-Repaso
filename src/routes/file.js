const express = require('express');
const router = express.Router();
const multer = require('multer')
const { diskStorage, photoFilter } = require('../utils/multer');


const uploadFile = (req, res, next) => {
  switch (req.params.type) {
    case 'avatar':
      multer({
        storage: diskStorage('avatar'),
        fileFilter: photoFilter,
      }).single('file')(req, res, next);
      break;
  }
};

router.post('/:type', uploadFile, async (req, res) => {
  const archivo = req.file;
  console.log('hi')
  res.status(200).json({
    status: 200,
    message: `Archivo de tipo ${req.params.type} subido`,
    archivo,
  });
});

module.exports = router;
