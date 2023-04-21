const Post = require("../models/post");

const PostController = {
    async create(req, res) {
        try {
            const newPost = await Post.create(req.body)
            res.status(201).send(newPost)
        } catch (error) {
            console.error(error)
            res.status(500).send({ message: 'There was a problem creating the post' })
        }
    }
};

module.exports = PostController;