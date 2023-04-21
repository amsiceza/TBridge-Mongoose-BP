const express = require('express');
const router = express.Router()
const PostController = require('../controllers/PostController');
const { authentication, isAuthor } = require("../middlewares/authentication");


router.post('/create', authentication, PostController.create)
router.put("/update/:_id", authentication, PostController.update);
router.delete("/delete/:_id", authentication, PostController.delete);





module.exports = router;