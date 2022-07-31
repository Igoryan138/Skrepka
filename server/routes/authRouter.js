const router = require('express').Router()
const bcrypt = require("bcrypt");
const { User } = require('../db/models');

router.route('/').post( async (req, res) => {
  const {password , email } = req.body

  try {
    const user = await User.findOne({
      where:
      {
        email
      }
    })
    if(!user){
      res.json('Пользователь не найден')
    }
    const isValidPass = await bcrypt.compare(password, user.password)
    if(!isValidPass){
      res.json('Не верный пароль')
    }

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
