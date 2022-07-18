const router = require('express').Router()
const { Category, Good, Photo } = require('../db/models')
const uniq = require('../middleware/uniq')

router.get('/', async (req, res) => {
  try {
    const goods = await Good.findAll({
      raw: true,
      include: {
        model: Photo,
        attributes: ['url'],
      },
    })

    // ! Делаем массив уникальным
    const uniqArr = uniq(goods)

    // ! Отправляем его на сервер
    res.json(uniqArr)
  } catch (error) {
    console.log(error);
  }
})

router.post('/', async (req, res) => {
  const { category, city, phrase } = req.body
  console.log('category,  city, phrase', category, city, phrase);
  let goods

  try {
    // ! Проверка если город и категория не указаны
    if (category === 'all' && city === 'all' && phrase) {
      console.log('указана только фраза');
      goods = await Good.findAll({
        where: { title: phrase },
        raw: true,
        include: {
          model: Photo,
          attributes: ['url'],
        },
      })
    }

    // ! Проверка если только категория не указана
    if (category === 'all' && city !== 'all' && phrase) {
      console.log('указаны фраза и город');
      goods = await Good.findAll({
        where: { title: phrase, city },
        raw: true,
        include: {
          model: Photo,
          attributes: ['url'],
        },
      })
    }

    // ! Проверка если только город не указан
    if (category !== 'all' && city === 'all' && phrase) {
      console.log('указаны фраза и категория');
      // * Находим категорию
      const currentCategory = await Category.findOne({
        where: { identifier: category }
      })
      goods = await Good.findAll({
        where: { title: phrase, categoryId: currentCategory.id },
        raw: true,
        include: {
          model: Photo,
          attributes: ['url'],
        },
      })
    }

    // ! Проверка если и категория и город указаны
    if (category !== 'all' && city !== 'all' && phrase) {
      console.log('все указано');
      // * Находим категорию
      const currentCategory = await Category.findOne({
        where: { identifier: category }
      })
      goods = await Good.findAll({
        where: {
          title: phrase,
          categoryId: currentCategory.id,
          city,
        },
        raw: true,
        include: {
          model: Photo,
          attributes: ['url'],
        },
      })
    }

    // ! Проверка если фразы нет но есть категория и город
    if (!phrase && category !== 'all' && city !== 'all') {
      console.log('указаны категория и город');
      // * Находим категорию
      const currentCategory = await Category.findOne({
        where: { identifier: category }
      })
      goods = await Good.findAll({
        where: {
          categoryId: currentCategory.id,
          city,
        },
        raw: true,
        include: {
          model: Photo,
          attributes: ['url'],
        },
      })
    }

    // ! Проверка если фразы нет и есть только город
    if (!phrase && category === 'all' && city !== 'all') {
      console.log('указан только город');
      goods = await Good.findAll({
        where: {
          city,
        },
        raw: true,
        include: {
          model: Photo,
          attributes: ['url'],
        },
      })
    }

    // ! Проверка если фразы нет и есть только категория
    if (!phrase && category !== 'all' && city === 'all') {
      console.log('указана только категория');
      // * Находим категорию
      const currentCategory = await Category.findOne({
        where: { identifier: category }
      })
      goods = await Good.findAll({
        where: {
          categoryId: currentCategory.id,
        },
        raw: true,
        include: {
          model: Photo,
          attributes: ['url'],
        },
      })
    }

    // ! Проверка если фразы, города и категории нет
    if (!phrase && category === 'all' && city === 'all') {
      console.log('ничего не указано');
      goods = await Good.findAll({
        raw: true,
        include: {
          model: Photo,
          attributes: ['url'],
        },
      })
    }

     console.log('goods', goods.length);

    // ! Если не нашли ни один результат - то возвращаем все объявления
    if(goods.length === 0) {
      goods = await Good.findAll({
        raw: true,
        include: {
          model: Photo,
          attributes: ['url'],
        },
      })
    }


    // ! Делаем массив уникальным
    const uniqArr = uniq(goods)

    // ! Отправляем его на сервер
    res.json(uniqArr)
  } catch (error) {
    console.log(error);
  }
})

router.get('/:name', async (req, res) => {
  const { skip=0, limit=10 } = req.query
   const { name } = req.params
  try {
    // ! Находим нужную категорию
    const category = await Category.findOne(({
      where: { identifier: name },
      raw: true,
    }))

    // ! Находим все товары этой категории
    const goods = await Good.findAll(({
      where: { categoryId: category.id },
      raw: true,
      offset: +skip,
      limit: +limit,
      include: {
        model: Photo,
        attributes: ['url'],
      },
    }))

    console.log('goods', goods);
    // ! Делаем массив уникальным
    const uniqArr = uniq(goods)

    console.log('uniqArr', uniqArr);

    // ! Отправляем его на сервер
    res.json({
      count: await Good.count({
        where:{
          categoryId: category.id
        }
      }),
      items:uniqArr,

    })
  } catch (error) {
    console.log(error);
  }
})


module.exports = router;
