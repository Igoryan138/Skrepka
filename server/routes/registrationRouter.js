const router = require('express').Router();
const bcrypt = require('bcrypt');

const { User } = require('../db/models/');

const saltRounds = 7;

router.route('/')
  .post(async (req, res) => {
    const {input} = req.body;
    console.log(req.body)

try {
  const hashedPassword = await bcrypt.hash(input.password, saltRounds)

  const checkUserEmail = await User.findOne({where:{email}})

 //Проерка пользователя:
  if(checkUserEmail){
    const msg = 'Пользователь с таким E-mail уже существует'
    res.json(msg)
  }else{
    const newUser = await User.create({
      firstName: input.firstName,
      lastName: input.lastName,
      email: input.email,
      tel: input.tel,
      password: hashedPassword
    })

    //создаем сессиию
    req.session.userId = newUser.id
    req.session.userName = newUser.firstName

    const userData = [newUser.id, newUser.firstName, newUser.lastName, newUser.email, newUser.tel]
    res.json(userData)
  }



} catch (error) {
  console.log(error)
}



    
    
    
    
    res.sendStatus(200)
    
  })

  module.exports  = router;