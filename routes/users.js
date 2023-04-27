const express = require('express');
const router = express.Router()
const UserController = require('../controllers/UserController');
const { authentication } = require("../middlewares/authentication");


router.post('/register',UserController.register)
router.post('/login',UserController.login)
router.delete('/logout',authentication , UserController.logout)
router.get('/getUser', authentication, UserController.getUser)
router.get('/confirm/:emailToken', UserController.confirm)
router.get("/getById/:_id", authentication, UserController.getById);
router.get("/getByUsername/:username", authentication, UserController.getByUsername);
router.put('/follow/:_id', authentication, UserController.follow);
router.put('/unfollow/:_id', authentication, UserController.unfollow);
router.get("/getUserFollowers", authentication, UserController.getUserFollowers);


module.exports = router;