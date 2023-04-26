const express = require('express');
const router = express.Router()
const UserController = require('../controllers/UserController');
const { authentication } = require("../middlewares/authentication");


router.post('/register',UserController.register)
router.post('/login',UserController.login)
router.delete('/logout',authentication , UserController.logout)
router.get('/getUser', authentication, UserController.getUser)
router.get('/confirm/:emailToken',UserController.confirm)


module.exports = router;