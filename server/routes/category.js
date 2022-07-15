const router = require('express').Router()
const { Category, Good, Photo } = require('../db/models')

router.get('/', async (req, res) => {
  try {
    const goods = await Good.findAll({
      raw: true,
      include: {
        model: Photo,
        attributes: ['url'],
      },
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
    const uniqArr = uniq(goods)

    // ! Отправляем его на сервер
    res.json(uniqArr)
  } catch (error) {
    console.log(error);
  }
})

router.get('/:name', async (req, res) => {
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
      include: {
        model: Photo,
        attributes: ['url'],
      },
    }))

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
    const uniqArr = uniq(goods)
    
    // ! Отправляем его на сервер
    res.json(uniqArr)
  } catch (error) {
    console.log(error);
  }
})

module.exports = router;
