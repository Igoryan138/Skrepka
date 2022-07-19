const router = require('express').Router();
const multer = require('multer');
const moment = require('moment');
const { Good, Photo, Category, User, Favourite } = require('../db/models');


const storage = multer.diskStorage({
  destination(req, file, cb) {
    pathFile = '../client/public/photo';
    cb(null, pathFile);
  },
  filename(req, file, cb) {
    const date = moment().format('DDMMYYYY-HHmmss_SSS');
    fileName = `${date}-${file.originalname}`;
    cb(null, fileName);
  },
});

const upload = multer({ storage });

router.post('/new', upload.array('photo'), async (req, res) => {

  // console.log('req.files', req.files);
  // console.log('req.body', req.body);
  const { userId, title, description, city, exchange, category } = req.body
  // console.log('userId, title, description, city, exchange, category', userId, title, description, city, exchange, category);


  // ! Находим категорию указанную при добавлении
  const currentCategory = await Category.findOne({ where: { identifier: category }, raw: true },)
  // console.log('currentCategory', currentCategory);

  // ! Заносим товар в таблицу
  const newGood = await Good.create({
    title, description, city, exchange,
    categoryId: currentCategory.id,
    userId: +userId
  })
  // console.log('newGood', newGood);

  // ! Заносим фото в таблицу
  for (let i = 0; i < req.files.length; i++) {
    await Photo.create({
      url: `/photo/${req.files[i].filename}`,
      goodId: newGood.id
    })
  }
  res.sendStatus(200)
});

router.get('/new', async (req, res) => {
  try {
    const newAdverts = await Good.findAll({
      order: [['id', 'DESC']],
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

router.post('/completed', async (req, res) => {
  const { id } = req.body;
  console.log(req.body);
  try {
    const good = await Good.findOne({ where: { id } })
    good.status = 'completed';
    good.save()
    console.log(good);
    res.sendStatus(200)
  } catch (error) {
    console.log('catchError---->', error);
  }
})

router.post('/favorite', async (req, res) => {
  const { id, isLogin } = req.body
  console.log(id, isLogin);
  try {
    // const serchFav = await Favourite.findAll({ where: { userId: isLogin, goodId: id }})
    // console.log(serchFav);
    // if (!serchFav) {
      await Favourite.create({ userId: isLogin, goodId: id })
    // }
  } catch (error) {
    console.log('catchError---->', error);
  }
})

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  // console.log(id);
  try {
    const adv = await Good.findOne({ where: { id }, raw: true })
    const user = await User.findOne({ where: { id: adv.userId }, raw: true })
    delete user.password;
    delete user.email;
    delete user.createdAt;
    delete user.updatedAt;
    const photo = await Photo.findAll({ where: { goodId: id }, raw: true })
    const urlPhoto = photo.map((el) => el.url)
    adv.url = urlPhoto;
    adv.user = user;
    delete adv.userId
    // console.log('photo', urlPhoto);
    res.json(adv)
  } catch (error) {
    console.log('catch---->', error);
  }
})

module.exports = router;
