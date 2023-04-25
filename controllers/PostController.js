const Post = require("../models/post");
const Comment = require("../models/post");
const User = require("../models/user");



const PostController = {
  // Create a new post
  async create(req, res, next) {
    try {
      const newPost = await Post.create({
        ...req.body,
        userId: req.user._id,
      });
      res.status(201).send(newPost);
    } catch (error) {
      next(error);
    }
  },

  // Update a post
  async update(req, res) {
    try {
      const post = await Post.findByIdAndUpdate(
        req.params._id,
        { ...req.body, userId: req.user._id },
        { new: true }
      );

      res.send({ message: "pots successfully updated", post });
    } catch (error) {
      console.error(error);
    }
  },

  // Delete post
  async delete(req, res) {
    try {
      const post = await Post.findByIdAndDelete(req.params._id);
      await Comment.deleteMany({ post: req.params._id });
      res.send({ message: `Deleted post || ${post.title} ||`, post });
    } catch (error) {
      console.error(error);
    }
  },

  // Find a post by title
  async getByTitle(req, res) {
    try {
      const query = req.params.title;
      const posts = await Post.find({
        title: { $regex: query, $options: "i" },
      });
      if (!posts.length) {
        return res.status(404).send({ message: "No posts found" });
      }
      res.send(posts);
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .send({ message: "There was a problem finding the posts" });
    }
  },

  // Find a post by id
  async getById(req, res) {
    try {
      const post = await Post.findById(req.params._id);
      if (!post) {
        return res.status(404).send({ message: "Post not found" });
      }
      res.send(post);
    } catch (error) {
      console.error(error);
      res.status(500).send({ message: "There was a problem finding the post" });
    }
  },

  // Find with comments
  async getInfo(req, res) {
    try {
      const { page = 1, limit = 10 } = req.query;
      const post = await Post.find()
        .populate("commentIds")
        .find()
        .limit(limit)
        .skip((page - 1) * limit);
      res.send(post);
    } catch (error) {
      console.error(error);
    }
  },

  async like(req, res) {
  try {
    const post = await Post.findById(req.params._id);

    if (post.likes.includes(req.user._id)) {
      return res.status(400).send({ message: "You already liked this post" });
    }

    post.likes.push(req.user._id);
    await post.save();

    await User.findByIdAndUpdate(
      req.user._id,
      { $push: { wishList: req.params._id } },
      { new: true }
    );

    res.send(post);
  } catch (error) {
    console.error(error);

    res.status(500).send({ message: "There was a problem with your like" });
  }
}
};

module.exports = PostController;
