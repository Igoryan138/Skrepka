const router = require('express').Router();
const { Deal } = require('../db/models');

router.post('/', async (req, res) => {
  const { firstGoodId, secondGoodId } = req.body
  try {
    await Deal.create({firstGoodId, secondGoodId})
    res.sendStatus(200)
  } catch (error) {
    console.log('catchError----->', error)
  }
})

module.exports = router;
