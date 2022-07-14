const router = require('express').Router()
const bcrypt = require("bcrypt");
const { User } = require('../db/models');

router.route('/').post( async (req, res) => {
  const input = req.body
  console.log('req.body=========>',req.body)
  const password = input.password
  console.log('password=========>',password);

  try {
    const user = await User.findOne({
      where:
      {
        email: input.email
      }
    })
    console.log('user=========>',user);
    if(!user){
      res.json('Пользователь не найден')
    }

    const isValidPass = await bcrypt.compare(password, user.password)
    console.log('isValidPass=========>',isValidPass);
    if(!isValidPass){
      res.json('Не верный пароль')
    }

    req.session.userId = user.id
    console.log('req.session.userId=========>',req.session.userId);
    req.session.userName = user.firstName
    console.log('req.session.userName=========>',req.session.userName);

    const id = user.id
    console.log('id=========>',id);
    const name = user.firstName
    console.log('name=========>',name);

    // console.log('RES=====>',res)
    res.json({id, name})
  } catch (error) {
    console.log(error)
  }
})


module.exports = router