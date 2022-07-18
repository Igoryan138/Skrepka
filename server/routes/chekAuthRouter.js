const router = require('express').Router()


router.get('/', async (req,res) => {
  if(req.session?.user){
    return res.json(req.session.user)
  }else{
    res.sendStatus(418)
  }
})



module.exports = router