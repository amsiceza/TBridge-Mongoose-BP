const User = require("../models/user");

const jwt = require('jsonwebtoken');
const { jwt_secret } = require('../config/keys.js')

const UserController = {

    //Endpoint register user
    async register(req, res) {
        try {
            const user = await User.create(req.body);
            res.status(201).send({ message: "User registered successfully", user });
        } catch (error) {
            console.error(error);
        }
    },
    
    // Endpoint login user with token
    async login(req, res) {
        try {
            const user = await User.findOne({
                 email: req.body.email,
            })
        
            const token = jwt.sign({ _id: user._id }, jwt_secret);
        
            if (user.tokens.length > 4) user.tokens.shift();
            user.tokens.push(token);
            await user.save();
        
            res.send({ message: 'Welcome ' + user.username, token });
        
        } catch (error) {
            console.error(error);
        }
        
     },

     // Endpoint logout user
     async logout(req, res) {
        try {
            await User.findByIdAndUpdate(req.user._id, {
                $pull: { tokens: req.headers.authorization },
            });
        
            res.send({ message: `Logged out successfully ${req.user.username}` });
        } catch (error) {
            console.error(error);
            res.status(500).send({
                message: "There was a problem trying to log out the user",
            });
        }  
    },

    // Endpoint get authenticated user
    async getUser(req, res) {
        try {
            const user = {
                email: req.user.email,
                username: req.user.username, 
                password: req.user.password
            }
            res.send(user);
          } catch (error) {
            console.error(error);
            res.status(500).send({ error: 'An error occurred while getting user information' });
          }
    },
};

module.exports = UserController;