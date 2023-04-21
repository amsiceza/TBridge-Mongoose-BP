const User = require("../models/User");

const UserController = {
    async create(req, res) {
        try {
            const newUser = await User.create(req.body)
            res.status(201).send(newUser)
        } catch (error) {
            console.error(error)
            res.status(500).send({ message: 'There was a problem creating the user' })
        }
    }
};

module.exports = UserController;