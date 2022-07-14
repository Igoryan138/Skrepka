const router = require('express').Router();

router.get('/', (req, res) => {
  if(req.session){
    req.session.destroy()

  }
})





module.exports = router
