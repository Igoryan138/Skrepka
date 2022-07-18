const router = require('express').Router();

const { User } = require('../db/models');




router.post('/account', async (req, res) => {
  const id = req.body.id
  
  const user = await User.findOne(({
    where: {id},
    raw:true
  }))
  console.log(user);
  res.json(user)
})

router.post('/edit',  async (req, res) => {
  const {firstName, lastName, phone, email } = req.body

  try {
    const user = await User.findByPk(req.session.user.id)
    if(!user){
      return res.status(403).json('Пользователь не найден')
    }
    user.firstName = firstName,
    user.lastName = lastName,
    user.email = email
    user.phone = phone,
    await user.save()

    req.session.user = {
      id:user.id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email, 
      phone: user.phone
    }
    res.json(req.session.user)
  } catch (error) {
    console.log(error)
  }
})


module.exports = router