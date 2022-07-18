const router = require('express').Router();

const { User, Good, Photo } = require('../db/models');

router.post('/account', async (req, res) => {
  const id = req.body.id
  try {
    const user = await User.findOne(({
      where: { id },
      raw: true
    }))
    res.json(user)    
  } catch (error) {
    console.log('catchError----->', error)
  }
})

router.post('/edit',  async (req, res) => {
  const {firstName, lastName, phone, email } = req.body

  try {
    const user = await User.findByPk(req.session.user.id)
    if (!user) {
      return res.status(403).json('Пользователь не найден')
    }
    user.firstName = firstName,
    user.lastName = lastName,
    user.email = email
    user.phone = phone,
    await user.save()

    req.session.user = {
      id: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      phone: user.phone
    }
    res.json(req.session.user)
  } catch (error) {
    console.log('catchError----->', error)
  }
})
router.get('/advertisements/completed/:id', async (req, res) => {
  const { id } = req.params
  console.log('id',id);
  try {
    const adverts = await Good.findAll({ where: { userId: id, status: 'completed' }, raw: true })
    console.log('adverts',adverts);
    const allId = adverts.map((el) => el.id)
    console.log('allId',allId);
    
    const photo = []
    for (let i = 0; i < allId.length; i++) {
      const firstPhoto = await Photo.findOne({ where: { goodId: allId[i] }, raw: true })
      // console.log('firstPhoto=====',firstPhoto);
      photo.push(firstPhoto.url)
      adverts[i].url = firstPhoto.url
    }
    res.json(adverts)
  } catch (error) {
    console.log('catchError---->', error);
  }

})

router.get('/advertisements/:id', async (req, res) => {
  const { id } = req.params
  console.log('id',id);
  try {
    const adverts = await Good.findAll({ where: { userId: id, status: 'active' }, raw: true })
    console.log('adverts',adverts);
    const allId = adverts.map((el) => el.id)
    console.log('allId',allId);
    
    const photo = []
    for (let i = 0; i < allId.length; i++) {
      const firstPhoto = await Photo.findOne({ where: { goodId: allId[i] }, raw: true })
      // console.log('firstPhoto=====',firstPhoto);
      photo.push(firstPhoto.url)
      adverts[i].url = firstPhoto.url
    }
    res.json(adverts)
  } catch (error) {
    console.log('catchError---->', error);
  }
})



module.exports = router
