const router = require('express').Router();
const multer = require('multer');
const { Good, Photo } = require('../db/models');

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

router.get('/new', async (req, res) => {
  try {
    const newAdverts = await Good.findAll({
      raw: true,
      limit: 12,
      include: {
        model: Photo,
        attributes: ['url'],
      }
    })

    // ! Функция для уникализации массива
    function uniq(arr) {
      const newArr = [];
      newArr.push(arr[0])
      for (let i = 1; i < arr.length; i++) {
        if (arr[i].id != arr[i - 1].id) {
          newArr.push(arr[i])
        }
      }
      return newArr
    }

    // ! Делаем массив уникальным
    const uniqArr = uniq(newAdverts)

    // ! Отправляем его на сервер
    res.json(uniqArr)
  } catch (error) {
    console.log(error);
  }
});

router.get('/:id', async (req, res) => {
  const {id} = req.params;
  console.log(id);
  try {
    const adv = await Good.findOne({where: { id }, raw: true})
    const photo = await Photo.findAll({where: { goodId: id }, raw: true})
    const urlPhoto = photo.map((el) => el.url)
    adv.url = urlPhoto
    console.log('adv', adv);
    // console.log('photo', urlPhoto);
    res.json(adv)
  } catch (error) {
    console.log('catch---->', error);
  }
})

module.exports = router;
