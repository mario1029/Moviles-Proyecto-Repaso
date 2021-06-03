const multer = require('multer')
const path = require('path')
const crypto = require('crypto')
const fs = require('fs')


const diskStorage = (type)=>{
  multer.diskStorage({
    destination: (req, file, cb) => {
      const saveTo = path.join(process.env.STORAGE_DIR || '/', type);
      if (!fs.existsSync(saveTo)) fs.mkdirSync(saveTo, { recursive: true });
      cb(null, saveTo);
    },
    filename: (req, file, cb) => {
      const hex = crypto.randomBytes(16);
      cb(null, 1 + hex.toString('hex') + '.png');
    },
  });
}  

const photoFilter = (req, file, cb) => {
  if (!file.originalname.match(/\.(jpg|jpeg|png)$/)) {
    cb(null, false);
  }
  cb(null, true);
};

module.exports= {diskStorage, photoFilter}
