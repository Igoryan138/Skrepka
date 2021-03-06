const router = require('express').Router();
const multer = require('multer');
const moment = require('moment');
const uniq = require('../middleware/uniq')
const { Good, Photo, Category, User, Favourites } = require('../db/models');


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

router.post('/new', upload.array('photo'), async (req, res) => {
  const { userId, title, description, city, exchange, category } = req.body

  // ! Находим категорию указанную при добавлении
  const currentCategory = await Category.findOne({ where: { identifier: category }, raw: true },)

  // ! Заносим товар в таблицу
  const newGood = await Good.create({
    title, description, city, exchange,
    categoryId: currentCategory.id,
    userId: +userId
  })

  // ! Заносим фото в таблицу
  for (let i = 0; i < req.files.length; i++) {
    await Photo.create({
      url: `photo/${req.files[i].filename}`,
      goodId: newGood.id
    })
  }
  res.sendStatus(200)
});

router.get('/new', async (req, res) => {
  try {
    const newAdverts = await Good.findAll({
      where: {status: 'active'},
      order: [['id', 'DESC']],
      raw: true,
      limit: 12,
      include: {
        model: Photo,
        attributes: ['url'],
      }
    })

    // ! Делаем массив уникальным
    const uniqArr = uniq(newAdverts)

    // ! Отправляем его на сервер
    res.json(uniqArr)
  } catch (error) {
    console.log(error);
  }
});


router.post('/favorite', async (req, res) => {
  const { id, isLogin } = req.body
  try {
    const serchFav = await Favourites.findAll({ where: { userId: isLogin, goodId: id }})
    if (serchFav == false) {
      await Favourites.create({ userId: isLogin, goodId: id })
      return res.sendStatus(200)
    } else {
      await serchFav[0].destroy()
      return res.sendStatus(201)
    }
  } catch (error) {
    console.log(error);
  }
})

router.post('/favorite/check', async (req, res) => {
  const { id, isLogin } = req.body
  try {
    const serchFav = await Favourites.findAll({ where: { userId: isLogin, goodId: id }})
    if (serchFav == false) {
      return res.sendStatus(201)
    } else {
      return res.sendStatus(200)
    }
  } catch (error) {
    console.log(error);
  }
})

router.get('/favourites/:id', async (req, res) => {
  const { id } = req.params
  try {
    const allFavourites = await Favourites.findAll({ 
      where: { userId: id },
      include: { model: Good }
    })
    const goods = allFavourites.map((el) => el.Good);
    const allId = goods.map((el) => el.id)
    for (let i = 0; i < allId.length; i++) {
      const firstPhoto = await Photo.findOne({ where: { goodId: allId[i] }, raw: true })
      goods[i].dataValues.url = firstPhoto.url
    }
    res.json(goods)
  } catch (error) {
    console.log(error);
  }
})

router.get('/active/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const good = await Good.findOne({ where: { id }})
    if (good.status === 'active') {
      return res.sendStatus(200)
    } else {
      return res.sendStatus(201)
    }
  } catch (error) {
    console.log(error);
  }
})

router.put('/change/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { exchange, description, title } = req.body;
    const good = await Good.findOne({ where: { id }})

    good.description = description;
    good.exchange = exchange;
    good.title = title;
    await good.save()
    console.log(good);
    const adv = await Good.findOne({ where: { id: good.id }, raw: true })
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
    res.json(adv)
  } catch (error) {
    console.log(error);
  }
})

router.get('/:id', async (req, res) => {
  const { id } = req.params;

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

    res.json(adv)
  } catch (error) {
    console.log(error);
  }
})

router.delete('/:id', async (req, res) => {

  try {
    const { id } = req.params;
    await Photo.destroy({ where: { goodId: id } })
    await Good.destroy({ where: { id } })
    res.sendStatus(200)
  } catch (error) {
    console.log(error);
  }
})

module.exports = router;
