const Comment = require("../models/comment");
const Post = require("../models/post");
const User = require('../models/user');



const CommentController = {

  async create(req, res) {
    try {
      const comment = await Comment.create({
        body: req.body.body,
        userId: req.user._id,
        postId: req.params._id
      });

      await Post.findByIdAndUpdate(req.params._id,
        { $push: { commentIds: comment._id } })

      res.status(201).send({ message: "Comment created successfully", comment });
    } catch (error) {
      console.error(error);
      res.status(500).send({ message: `There was a problem creating the comment: ${error.message}` });
    }
  },

  async getAll(req, res) {
    try {
      const comment = await Comment.find();
      res.status(201).send({ message: "We finded all this comments", comment });
    } catch (error) {
      console.error(error);
      res.status(500).send({ message: `There was a problem creating the comment: ${error.message}` });
    }
  },

  async update(req, res) {
    try {
      const comment = await Comment.findByIdAndUpdate(
        req.params._id,
        { ...req.body, userId: req.user._id },
        { new: true }
      );
      res.status(201).send({ message: "Comment update successfully", comment });
    } catch (error) {
      console.error(error);
      res.status(500).send({ message: `There was a problem creating the comment: ${error.message}` });
    }
  },

  async delete(req, res) {
    try {
      const comment = await Comment.findByIdAndDelete(req.params._id);
      await Post.findByIdAndUpdate(comment.postId, { $pull: { commentIds: comment._id } });
      res.send({ message: "Deleted comment", comment });
    } catch (error) {
      console.error(error);
      res.status(500).send({ message: `There was a problem deleting the comment: ${error.message}` });
    }
  },
};

module.exports = CommentController;