const express = require('express');
const router = express.Router()
const CommentController = require('../controllers/CommentController');
const { authentication, isAuthorCom } = require("../middlewares/authentication");

router.post('/create/:_id',authentication ,CommentController.create)
router.get('/getAll', CommentController.getAll)
router.put('/update/:_id',authentication, isAuthorCom, CommentController.update)
router.delete('/delete/:_id',authentication, isAuthorCom, CommentController.delete)
router.put('/likes/:_id', authentication, CommentController.like);
router.put('/unlike/:_id', authentication, CommentController.unlike);
router.put('/update/:_id',authentication, CommentController.update)
router.delete('/delete/:_id',authentication, CommentController.delete)



module.exports = router;