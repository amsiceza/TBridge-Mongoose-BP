const Comment = require("../models/Comment");

const CommentController = {
    async create(req, res) {
        try {
            const newComment = await Comment.create(req.body)
            res.status(201).send(newComment)
        } catch (error) {
            console.error(error)
            res.status(500).send({ message: 'There was a problem creating the comment' })
        }
    }
};

module.exports = CommentController;