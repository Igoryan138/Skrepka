const router = require('express').Router()


router.get('/', async (req,res) => {
  if(req.session.userId){
    return res.json(req.session.userId)
  }else{
    res.sendStatus(418)
  }
})



module.exports = router