const express = require('express');
const router = express.Router()
const CommentController = require('../controllers/CommentController');
const { authentication } = require("../middlewares/authentication");

router.post('/create/:_id',authentication ,CommentController.create)
router.get('/getAll', CommentController.getAll)




module.exports = router;