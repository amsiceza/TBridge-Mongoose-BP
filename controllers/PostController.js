const Post = require("../models/post");

const PostController = {

    // Create a new post
    async create(req, res, next) {
        try {
            const newPost = await Post.create({
                ...req.body,
                userId: req.user._id,
            })
            res.status(201).send(newPost)
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
                { new: true, }
            );

            res.send({ message: "pots successfully updated", post });
        } catch (error) {
            console.error(error);
        }
    },

    // Delete post
    async delete(req, res) {
        try {
            const post = await Post.findByIdAndDelete(
                req.params._id
            );
            res.send({ message: `Delete post || ${post.title} || `, post });
        } catch (error) {
            console.error(error);
        }
    },

    // Find a post by title
    async getByTitle(req, res) {
        try {
            const query = req.params.title;
            const posts = await Post.find({ title: { $regex: query, $options: 'i' } });
            if (!posts.length) {
                return res.status(404).send({ message: 'No posts found' });
            }
            res.send(posts);
        } catch (error) {
            console.error(error);
            res.status(500).send({ message: 'There was a problem finding the posts' });
        }
    },

    // Find a post by id
    async getById(req, res) {
        try {
            const post = await Post.findById(req.params._id);
            if (!post) {
                return res.status(404).send({ message: 'Post not found' });
            }
            res.send(post);
        } catch (error) {
            console.error(error);
            res.status(500).send({ message: 'There was a problem finding the post' });
        }
    },

};

module.exports = PostController;