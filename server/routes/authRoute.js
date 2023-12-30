const {Router} = require('express');
const signup = require('../controllers/signup')
const login = require("../controllers/login")
const auth = require("../controllers/auth")


const router = Router()

router.post('/signup' , signup);
router.post('/login' , login);
router.post('/auth' , auth);

module.exports = router;