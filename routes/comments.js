const express = require('express');
const router = express.Router()
const CommentController = require('../controllers/CommentController');
const { authentication } = require("../middlewares/authentication");

router.post('/create/:_id',authentication , CommentController.create)
router.put('/likes/:_id', authentication, CommentController.like);
router.put('/unlike/:_id', authentication, CommentController.unlike);




module.exports = router;