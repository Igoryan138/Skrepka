const router = require('express').Router()
const { Category, Good } = require('../db/models')

router.get('/', async (req, res) => {
  try {
    const goods = await Good.findAll( { raw: true } )
    // console.log('goods', goods);
    res.json(goods)
  } catch (error) {
    console.log(error);
  }
})

router.get('/:name', async (req, res) => {
  const { name } = req.params
  console.log('name', name);
  try {
    // ! Находим нужную категорию
    const category = await Category.findOne(({where: { identifier: name }}))
    console.log('category', category);
    const goods = await Good.findAll(({ where: { categoryId: category.id }, raw: true }))
    // console.log('goods', goods);
    res.json(goods)
  } catch (error) {
    console.log(error);
  }
})

module.exports = router;
