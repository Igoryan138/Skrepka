const router = require('express').Router()
const { Category } = require('../db/models')

router.get('/', async (req, res) => {
  try {
        const categories = await Category.findAll({raw: true})
        res.json(categories)
      } catch (error) {
        console.log(error);
      }
});

module.exports = router;
