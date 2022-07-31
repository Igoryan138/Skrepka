const router = require('express').Router();
const { Deal, Good, Photo } = require('../db/models');


router.post('/', async (req, res) => {
  const { notMineGoodId, myGoodId, myUserId } = req.body

  try {
    const anotherUser = await Good.findOne({ where: { id: notMineGoodId } })
    const notMineUserId = anotherUser.userId;
    await Deal.create({ notMineGoodId, myGoodId, notMineUserId, myUserId })
    res.sendStatus(200)
  } catch (error) {
    console.log(error)
  }
})

router.get('/outgoing/:id', async (req, res) => {
  try {
    const { id } = req.params;
    // массив объектов моих заявок с моими вещами
    const myDeals = await Deal.findAll({ where: { myUserId: id, isActive: true }, include: { model: Good } });

    // все id мои вещей
    const allMyGoodsId = myDeals.map((el) => el.myGoodId)

    // каждой вещи добавляем по фотке для отрисовки
    for (let i = 0; i < allMyGoodsId.length; i++) {
      const firstPhoto = await Photo.findOne({ where: { goodId: allMyGoodsId[i] }, raw: true })
      myDeals[i].dataValues.url = firstPhoto.url
    }


    //* массив объектов не с моими вещами
    const notMineGoodsAllId = myDeals.map((el) => el.notMineGoodId);
    const notMineGoods = []
    for (let i = 0; i < notMineGoodsAllId.length; i++) {
      const res = await Good.findOne({ where: { id: notMineGoodsAllId[i] }, raw: true })
      notMineGoods.push(res)
      const firstPhoto = await Photo.findOne({ where: { goodId: notMineGoodsAllId[i] }, raw: true })
      notMineGoods[i].url = firstPhoto.url
    }
    const deal = { myDeals, notMineGoods }
    res.json(deal)

  } catch (error) {
    console.log(error)
  }
})

router.delete('/outgoing/:id', async (req, res) => {

  try {
    const { id } = req.params
    const deal = await Deal.findOne({ where: { id } })
    deal.destroy()
    res.sendStatus(200)
  } catch (error) {
    console.log(error)
  }
})

router.get('/incoming/:id', async (req, res) => {
  const { id } = req.params;

  try {
    //* массив объектов не с моими вещами
    const notMineGoods = await Deal.findAll({ where: { notMineUserId: id, isActive: true }, include: { model: Good } });

    // все id не моих вещей
    const allNotMineGoodsId = notMineGoods.map((el) => el.myGoodId)

    // каждой вещи добавляем по фотке для отрисовки
    for (let i = 0; i < allNotMineGoodsId.length; i++) {
      const firstPhoto = await Photo.findOne({ where: { goodId: allNotMineGoodsId[i] }, raw: true })
      notMineGoods[i].dataValues.url = firstPhoto.url
    }

    //* массив объектов моих заявок с моими вещами
    const myGoodsAllId = notMineGoods.map((el) => el.notMineGoodId);
    const myGoods = []
    for (let i = 0; i < myGoodsAllId.length; i++) {
      const res = await Good.findOne({ where: { id: myGoodsAllId[i] }, raw: true })
      myGoods.push(res)
      const firstPhoto = await Photo.findOne({ where: { goodId: myGoodsAllId[i] }, raw: true })
      myGoods[i].url = firstPhoto.url
    }
    const deal = { myGoods, notMineGoods }
    res.json(deal)

  } catch (error) {
    console.log(error)
  }
})

router.put('/incoming/:id', async (req, res) => {
  try {
    const { id } = req.params
    const deal = await Deal.findOne({ where: { id } })
    deal.isActive = false;
    deal.save()

    const firstGood = await Good.findOne({ where: { id: deal.myGoodId } })
    firstGood.status = 'completed'
    firstGood.save()
    const firstGoodPhoto = await Photo.findAll({ where: { goodId: firstGood.id }})

    const newFirstGood = await Good.create({ 
      title: firstGood.title,
      description: firstGood.description,
      exchange: firstGood.exchange,
      city: firstGood.city,
      userId: deal.notMineUserId,
      categoryId: firstGood.categoryId
    })

    for (let i = 0; i < firstGoodPhoto.length; i++) {
      await Photo.create({
        url: firstGoodPhoto[i].url,
        goodId: newFirstGood.id
      })
    }

    const secondGood = await Good.findOne({ where: { id: deal.notMineGoodId } })
    secondGood.status = 'completed'
    secondGood.save()
    const secondGoodPhoto = await Photo.findAll({ where: { goodId: secondGood.id }})

    const newSecondGood = await Good.create({ 
      title: secondGood.title,
      description: secondGood.description,
      exchange: secondGood.exchange,
      city: secondGood.city,
      userId: deal.myUserId,
      categoryId: secondGood.categoryId
    })

    for (let i = 0; i < secondGoodPhoto.length; i++) {
      await Photo.create({
        url: secondGoodPhoto[i].url,
        goodId: newSecondGood.id
      })
    }


    res.sendStatus(200)
  } catch (error) {
    console.log(error)
  }
})

router.get('/outgoingCompleted/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const myDeals = await Deal.findAll({ where: { myUserId: id, isActive: false }, include: { model: Good } });
    const allMyGoodsId = myDeals.map((el) => el.myGoodId)
    for (let i = 0; i < allMyGoodsId.length; i++) {
      const firstPhoto = await Photo.findOne({ where: { goodId: allMyGoodsId[i] }, raw: true })
      myDeals[i].dataValues.url = firstPhoto.url
    }

    //* массив объектов не с моими вещами
    const notMineGoodsAllId = myDeals.map((el) => el.notMineGoodId);
    const notMineGoods = []
    for (let i = 0; i < notMineGoodsAllId.length; i++) {
      const res = await Good.findOne({ where: { id: notMineGoodsAllId[i] }, raw: true })
      notMineGoods.push(res)
      const firstPhoto = await Photo.findOne({ where: { goodId: notMineGoodsAllId[i] }, raw: true })
      notMineGoods[i].url = firstPhoto.url
    }
    const deal = { myDeals, notMineGoods }
    res.json(deal)
  } catch (error) {
    console.log(error)
  }
})

router.get('/incomingCompleted/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const notMineGoods = await Deal.findAll({ where: { notMineUserId: id, isActive: false }, include: { model: Good } });
    const allNotMineGoodsId = notMineGoods.map((el) => el.myGoodId)
    for (let i = 0; i < allNotMineGoodsId.length; i++) {
      const firstPhoto = await Photo.findOne({ where: { goodId: allNotMineGoodsId[i] }, raw: true })
      notMineGoods[i].dataValues.url = firstPhoto.url
    }
    const myGoodsAllId = notMineGoods.map((el) => el.notMineGoodId);
    const myGoods = []
    for (let i = 0; i < myGoodsAllId.length; i++) {
      const res = await Good.findOne({ where: { id: myGoodsAllId[i] }, raw: true })
      myGoods.push(res)
      const firstPhoto = await Photo.findOne({ where: { goodId: myGoodsAllId[i] }, raw: true })
      myGoods[i].url = firstPhoto.url
    }
    const deal = { myGoods, notMineGoods }
    res.json(deal)

  } catch (error) {
    console.log(error)
  }
})

router.put('/return/:id', async (req, res) => {
  try {
    const { id } = req.params
    const deal = await Deal.findOne({ where: { id } })

    deal.isActive = true;
    deal.save()

    const firstGood = await Good.findOne({ where: { id: deal.myGoodId } })
    firstGood.status = 'active'
    firstGood.save()

    const secondGood = await Good.findOne({ where: { id: deal.notMineGoodId } })
    secondGood.status = 'active'
    secondGood.save()
  } catch (error) {
    console.log(error)
  }
})

module.exports = router;
