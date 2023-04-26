const express = require('express');
const router = express.Router()
const CommentController = require('../controllers/CommentController');
const { authentication } = require("../middlewares/authentication");

router.post('/create/:_id',authentication ,CommentController.create)
router.get('/getAll', CommentController.getAll)
router.put('/update/:_id',authentication, CommentController.update)
router.delete('/delete/:_id',authentication, CommentController.delete)





module.exports = router;