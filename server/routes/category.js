const router = require('express').Router()
const { Category, Good, Photo } = require('../db/models')
const uniq = require('../middleware/uniq')
const { Op } = require("sequelize");

router.get('/', async (req, res) => {
  try {
    const goods = await Good.findAll({
      where: {status: 'active'},
      raw: true,
      include: {
        model: Photo,
        attributes: ['url'],
      },
    })

    // ! Делаем массив уникальным
    const uniqArr = uniq(goods)

    // ! Отправляем его на сервер
    res.json({
      count: uniqArr.length,
      items: uniqArr,

    })
  } catch (error) {
    console.log(error);
  }
})

router.post('/', async (req, res) => {
  const { category, city, phrase } = req.body
  let goods

  try {
    // ! Проверка если город и категория не указаны
    if (category === 'all' && city === 'all' && phrase) {
  
      goods = await Good.findAll({
        where: {
          status: 'active',
          title: {
            [Op.iLike]: `%${phrase}%`
          }
        },
        raw: true,
        include: {
          model: Photo,
          attributes: ['url'],
        },
      })
    }

    // ! Проверка если только категория не указана
    if (category === 'all' && city !== 'all' && phrase) {
      goods = await Good.findAll({
        where: {
          status: 'active',
          title: {
            [Op.iLike]: `%${phrase}%`
          },
          city
        },
        raw: true,
        include: {
          model: Photo,
          attributes: ['url'],
        },
      })
    }

    // ! Проверка если только город не указан
    if (category !== 'all' && city === 'all' && phrase) {
     
      // * Находим категорию
      const currentCategory = await Category.findOne({
        where: { identifier: category }
      })
      goods = await Good.findAll({
        where: {
          status: 'active',
          title: {
            [Op.iLike]: `%${phrase}%`
          },
          categoryId: currentCategory.id
        },
        raw: true,
        include: {
          model: Photo,
          attributes: ['url'],
        },
      })
    }

    // ! Проверка если и категория и город указаны
    if (category !== 'all' && city !== 'all' && phrase) {
     
      // * Находим категорию
      const currentCategory = await Category.findOne({
        where: { identifier: category }
      })
      goods = await Good.findAll({
        where: {
          status: 'active',
          title: {
            [Op.iLike]: `%${phrase}%`
          },
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
      
      // * Находим категорию
      const currentCategory = await Category.findOne({
        where: { identifier: category }
      })
      goods = await Good.findAll({
        where: {
          status: 'active',
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
  
      goods = await Good.findAll({
        where: {
          status: 'active',
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
      
      // * Находим категорию
      const currentCategory = await Category.findOne({
        where: { identifier: category }
      })
      goods = await Good.findAll({
        where: {
          status: 'active',
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
     
      goods = await Good.findAll({
        where: {
          status: 'active',
        },
        raw: true,
        include: {
          model: Photo,
          attributes: ['url'],
        },
      })
    }

    // ! Если не нашли ни один результат - то возвращаем все объявления
    if (goods.length === 0) {
      goods = await Good.findAll({
        where: {
          status: 'active',
        },
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
  const { skip = 0, limit = 10 } = req.query
  const { name } = req.params
  try {

    // ! Находим нужную категорию
    const category = await Category.findOne(({
      where: { identifier: name },
      raw: true,
    }))

    // ! Находим все товары этой категории
    const goods = await Good.findAll(({
      where: { categoryId: category.id, status: 'active' },
      raw: true,
      offset: +skip,
      limit: +limit,
      include: {
        model: Photo,
        attributes: ['url'],
      },
    }))

    // ! Делаем массив уникальным
    const uniqArr = uniq(goods)

    // ! Отправляем его на сервер
    res.json({
      count: await Good.count({
        where: {
          categoryId: category.id
        }
      }),
      items: uniqArr,
    })
  } catch (error) {
    console.log(error);
  }
})


module.exports = router;
