const Post = require("../models/post");

const PostController = {

    // Create a new post
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

    // Update a post
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

     // Find posts by name
     async getByName(req, res) {
        try {
            const name = req.query.name;
            const posts = await Post.find({ title: { $regex: name, $options: "i" } });

            if (posts.length === 0) {
                return res.status(404).send({ message: `No posts found with name '${name}'` });
            }

            res.send(posts);
        } catch (error) {
            console.error(error);
            res.status(500).send({ message: 'There was a problem finding posts by name' });
        }
    }
};

module.exports = PostController;