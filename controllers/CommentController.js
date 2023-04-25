const Comment = require("../models/comment");
const Post = require("../models/post");
const User = require('../models/user');



const CommentController = {
  async create(req, res) {
    try {
      const comment = await Comment.create({
        body: req.body.body
      });

      await Post.findByIdAndUpdate(req.params._id,
        { $push: { commentIds: comment._id } })

      res.status(201).send({ message: "Comment created successfully", comment });
    } catch (error) {
      console.error(error);
      res.status(500).send({ message: `There was a problem creating the comment: ${error.message}` });
    }
  },
};

module.exports = CommentController;