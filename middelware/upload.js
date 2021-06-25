const multer  = require('multer')
// const upload = multer()
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
      cb(null, './uploads/'+new Date().toISOString().replace(/T.*/, ''));
    },
    filename: function(req, file, cb) {
      cb(null, new Date().toISOString().replace(/:/g, '-') + file.originalname);
    }
  });
const upload = multer({ storage: storage })

module.exports=upload