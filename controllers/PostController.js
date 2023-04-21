const Post = require("../models/post");

const PostController = {

    // Create a new product
    async create(req, res) {
        try {
            const newPost = await Post.create({
                ...req.body,
                userId: req.user._id,
            })
            res.status(201).send(newPost)
        } catch (error) {
            console.error(error)
            res.status(500).send({ message: 'There was a problem creating the post' })
        }
    },

    // Update a product
    async update(req, res) {
        try {
            const post = await Post.findByIdAndUpdate(
                req.params._id,
                { ...req.body, userId: req.user._id },
                { new: true,}
            );

            res.send({ message: "pots successfully updated", post });  
        } catch (error) {
            console.error(error);
        } 
    },
};

module.exports = PostController;