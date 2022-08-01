const router = require('express').Router();
const bcrypt = require('bcrypt');

const { User } = require('../db/models/');

const saltRounds = 7;

router.post('/' ,async (req, res) => {
    const input = req.body;
   
try {
  const hashedPassword = await bcrypt.hash(input.password, saltRounds)

   const checkUserEmail = await User.findOne({where:{email: input.email}})


 // Проерка пользователя:
  if(checkUserEmail){
    const msg = 'Пользователь с таким E-mail уже существует'
    res.json(msg)
  }else{
    const newUser = await User.create({
      firstName: input.firstName,
      lastName: input.lastName,
      email: input.email,
      phone: input.phone,
      password: hashedPassword
    })

    //создаем сессиию
    req.session.user = {
      id:newUser.id,
      firstName: newUser.firstName,
      lastName: newUser.lastName,
      email: newUser.email, 
      phone: newUser.phone
    }
    res.json(req.session.user)
  }



} catch (error) {
  console.log(error)
}



    
    
    
    
//     res.sendStatus(200)
    
  })

  module.exports  = router;
