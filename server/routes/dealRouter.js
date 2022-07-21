const router = require('express').Router();
const { Deal, Good, Photo } = require('../db/models');


router.post('/', async (req, res) => {
  const { notMineGoodId, myGoodId, myUserId } = req.body
  // console.log('myUserId',myUserId);
  try {
    const anotherUser = await Good.findOne({ where: { id: notMineGoodId } })
    const notMineUserId = anotherUser.userId;
    await Deal.create({ notMineGoodId, myGoodId, notMineUserId, myUserId })
    res.sendStatus(200)
  } catch (error) {
    console.log('catchError----->', error)
  }
})

router.get('/outgoing/:id', async (req, res) => {
  try {
    const { id } = req.params;
    // массив объектов моих заявок с моими вещами
    const myDeals = await Deal.findAll({ where: { myUserId: id, isActive: true }, include: { model: Good } });
    // console.log(myDeals);

    // все id мои вещей
    const allMyGoodsId = myDeals.map((el) => el.myGoodId)
    // console.log(allMyGoodsId);

    // каждой вещи добавляем по фотке для отрисовки
    for (let i = 0; i < allMyGoodsId.length; i++) {
      const firstPhoto = await Photo.findOne({ where: { goodId: allMyGoodsId[i] }, raw: true })
      myDeals[i].dataValues.url = firstPhoto.url
    }
    // console.log(myDeals);


    //* массив объектов не с моими вещами
    const notMineGoodsAllId = myDeals.map((el) => el.notMineGoodId);
    console.log('notMineGoodsAllId', notMineGoodsAllId);
    const notMineGoods = []
    for (let i = 0; i < notMineGoodsAllId.length; i++) {
      const res = await Good.findOne({ where: { id: notMineGoodsAllId[i] }, raw: true })
      notMineGoods.push(res)
      const firstPhoto = await Photo.findOne({ where: { goodId: notMineGoodsAllId[i] }, raw: true })
      notMineGoods[i].url = firstPhoto.url
    }
    // console.log(notMineGoods);
    const deal = { myDeals, notMineGoods }
    // console.log(deal);
    res.json(deal)

  } catch (error) {
    console.log('catchError----->', error)
  }
})

router.delete('/outgoing/:id', async (req, res) => {
  console.log();
  try {
    const { id } = req.params
    const deal = await Deal.findOne({ where: { id } })
    deal.destroy()
    res.sendStatus(200)
  } catch (error) {
    console.log('catchError----->', error)
  }
})

router.get('/incoming/:id', async (req, res) => {
  const { id } = req.params;
  // console.log(+id);

  try {
    //* массив объектов не с моими вещами
    const notMineGoods = await Deal.findAll({ where: { notMineUserId: id, isActive: true }, include: { model: Good } });
    // console.log(notMineGoods);

    // все id не моих вещей
    const allNotMineGoodsId = notMineGoods.map((el) => el.myGoodId)
    // console.log(allNotMineGoodsId);

    // каждой вещи добавляем по фотке для отрисовки
    for (let i = 0; i < allNotMineGoodsId.length; i++) {
      const firstPhoto = await Photo.findOne({ where: { goodId: allNotMineGoodsId[i] }, raw: true })
      notMineGoods[i].dataValues.url = firstPhoto.url
    }
    // console.log(notMineGoods);


    //* массив объектов моих заявок с моими вещами
    const myGoodsAllId = notMineGoods.map((el) => el.notMineGoodId);
    console.log('myGoodsAllId', myGoodsAllId);
    const myGoods = []
    for (let i = 0; i < myGoodsAllId.length; i++) {
      const res = await Good.findOne({ where: { id: myGoodsAllId[i] }, raw: true })
      myGoods.push(res)
      const firstPhoto = await Photo.findOne({ where: { goodId: myGoodsAllId[i] }, raw: true })
      myGoods[i].url = firstPhoto.url
    }
    // console.log(myGoods);
    const deal = { myGoods, notMineGoods }
    // console.log(deal);
    res.json(deal)

  } catch (error) {
    console.log('catchError----->', error)
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

    const secondGood = await Good.findOne({ where: { id: deal.notMineGoodId } })
    secondGood.status = 'completed'
    secondGood.save()
    // console.log(secondGood);
    res.sendStatus(200)
  } catch (error) {
    console.log('catchError----->', error)
  }
})

router.get('/outgoingCompleted/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const myDeals = await Deal.findAll({ where: { myUserId: id, isActive: false }, include: { model: Good } });
    // console.log(myDeals);
    const allMyGoodsId = myDeals.map((el) => el.myGoodId)
    // console.log(allMyGoodsId);
    for (let i = 0; i < allMyGoodsId.length; i++) {
      const firstPhoto = await Photo.findOne({ where: { goodId: allMyGoodsId[i] }, raw: true })
      myDeals[i].dataValues.url = firstPhoto.url
    }

    //* массив объектов не с моими вещами
    const notMineGoodsAllId = myDeals.map((el) => el.notMineGoodId);
    console.log('notMineGoodsAllId', notMineGoodsAllId);
    const notMineGoods = []
    for (let i = 0; i < notMineGoodsAllId.length; i++) {
      const res = await Good.findOne({ where: { id: notMineGoodsAllId[i] }, raw: true })
      notMineGoods.push(res)
      const firstPhoto = await Photo.findOne({ where: { goodId: notMineGoodsAllId[i] }, raw: true })
      notMineGoods[i].url = firstPhoto.url
    }
    // console.log(notMineGoods);
    const deal = { myDeals, notMineGoods }
    console.log(deal);
    res.json(deal)
  } catch (error) {
    console.log('catchError----->', error)
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
    // console.log('myGoodsAllId', myGoodsAllId);
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
    console.log('catchError----->', error)
  }
})

router.put('/return/:id', async (req, res) => {
  try {
    const { id } = req.params
    console.log(id);
    const deal = await Deal.findOne({ where: { id } })
    console.log(deal);
    deal.isActive = true;
    deal.save()

    const firstGood = await Good.findOne({ where: { id: deal.myGoodId } })
    firstGood.status = 'active'
    firstGood.save()

    const secondGood = await Good.findOne({ where: { id: deal.notMineGoodId } })
    secondGood.status = 'active'
    secondGood.save()
    // console.log(secondGood);
  } catch (error) {
    console.log('catchError----->', error)
  }
})

module.exports = router;
