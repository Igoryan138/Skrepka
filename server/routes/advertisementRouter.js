const router = require('express').Router();
const multer = require('multer');

const storage = multer.diskStorage({
  destination(req, file, cb) {
    pathFile = 'public/photo';
    cb(null, pathFile);
  },
  filename(req, file, cb) {
    const date = moment().format('DDMMYYYY-HHmmss_SSS');
    fileName = `${date}-${file.originalname}`;
    cb(null, fileName);
  },
});

const upload = multer({ storage });

router.post('/', upload.array('photo'), async (req, res) => {
  console.log(req.file);
  console.log(req.body);
  // res.sendStatus(200)
});

module.exports = router;
