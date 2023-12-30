const {Router} = require('express');


const router = Router()
router.post('/signup' , signup);

module.exports = router;