const router = require('express').Router();

router.get('/', (req, res) => {
  if(req.session){
    req.session.destroy();
    res.clearCookie(process.env.COOKIE_NAME);
    res.end();
  }
})





module.exports = router
