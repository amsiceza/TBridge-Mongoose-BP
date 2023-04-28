const Comment = require("../models/comment");
const Post = require("../models/post");


const CommentController = {
 
  // Create comment
  async create(req, res) {
    try {
      const comment = await Comment.create({
        body: req.body.body,
        userId: req.user._id,
        postId: req.params._id,
        img: req.file.path
      });

      await Post.findByIdAndUpdate(req.params._id,
        { $push: { commentIds: comment._id } })

      res.status(201).send({ message: "Comment created successfully", comment });
    } catch (error) {
      console.error(error);
      res.status(500).send({ message: `There was a problem creating the comment: ${error.message}` });
    }
  },

  // Get comment
  async getAll(req, res) {
    try {
      const comment = await Comment.find();
      res.status(201).send({ message: "We finded all this comments", comment });
    } catch (error) {
      console.error(error);
      res.status(500).send({ message: `There was a problem creating the comment: ${error.message}` });
    }
  },

  // Update comment
  async update(req, res) {
    try {
      const comment = await Comment.findByIdAndUpdate(
        req.params._id,
        { 
          ...req.body, 
          img: req.file.path,
          userId: req.user._id 
        },
        { new: true }
      );
      res.status(201).send({ message: "Comment update successfully", comment });
    } catch (error) {
      console.error(error);
      res.status(500).send({ message: `There was a problem creating the comment: ${error.message}` });
    }
  },

  // Delete comment
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

  //To like a comment, only one like per user 
  async like(req, res) {
    try {
      const comment = await Comment.findById(req.params._id);

      if (comment.likes.includes(req.user._id)) {
        return res.status(400).send({ message: "You already liked this comment" });
      }

      comment.likes.push(req.user._id);
      await comment.save();

      res.send(comment);
    } catch (error) {
      console.error(error);

      res.status(500).send({ message: "There was a problem with your like" });
    }
  },

  // Remove like from comment, only remove own like
  async unlike(req, res) {
    try {
      const comment = await Comment.findById(req.params._id);

      if (!comment.likes.includes(req.user._id)) {
        return res.status(400).send({ message: "You haven't liked this comment yet" });
      }

      const index = comment.likes.indexOf(req.user._id);
      comment.likes.splice(index, 1);
      await comment.save();

      res.send(comment);
    } catch (error) {
      console.error(error);

      res.status(500).send({ message: "There was a problem with your unlike" });
    }
  },

  //To like a comment, only one like per user 
  async like(req, res) {
    try {
      const comment = await Comment.findById(req.params._id);

      if (comment.likes.includes(req.user._id)) {
        return res.status(400).send({ message: "You already liked this comment" });
      }

      comment.likes.push(req.user._id);
      await comment.save();

      res.send(comment);
    } catch (error) {
      console.error(error);

      res.status(500).send({ message: "There was a problem with your like" });
    }
  },

  // Remove like from comment, only remove own like
  async unlike(req, res) {
    try {
      const comment = await Comment.findById(req.params._id);

      if (!comment.likes.includes(req.user._id)) {
        return res.status(400).send({ message: "You haven't liked this comment yet" });
      }

      const index = comment.likes.indexOf(req.user._id);
      comment.likes.splice(index, 1);
      await comment.save();

      res.send(comment);
    } catch (error) {
      console.error(error);

      res.status(500).send({ message: "There was a problem with your unlike" });
    }
  }
};

module.exports = CommentController;