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

    req.session.userId = user.id
    req.session.userName = user.firstName

    const id = user.id
    const name = user.firstName
    res.json({id, name})
  } catch (error) {
    console.log(error)
  }
})


module.exports = router