const express = require('express');
const router = express.Router()
const PostController = require('../controllers/PostController');
const { authentication, isAuthor } = require("../middlewares/authentication");


router.post('/create', authentication, PostController.create)
router.put("/update/:_id", authentication, isAuthor, PostController.update);
router.delete("/delete/:_id", authentication, isAuthor, PostController.delete);
router.get("/getByTitle/:title", authentication, PostController.getByTitle);
router.get("/getById/:_id", authentication, PostController.getById);
router.get("/getInfo", authentication, PostController.getInfo);
router.post('/likes/:_id', authentication, PostController.like);






module.exports = router;