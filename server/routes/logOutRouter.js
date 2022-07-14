const router = require('express').Router();

router.get('/', (req, res) => {
  // const { id } = req.params
  // console.log('REQ PARAMS ====>',id);
  req.session.destroy()
})





module.exports = router
