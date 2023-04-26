const User = require("../models/user");

const jwt = require('jsonwebtoken');
const { jwt_secret } = require('../config/keys.js')
const bcrypt = require('bcryptjs');
const transporter = require("../config/nodemailer");

const UserController = {

  //Endpoint register user
  async register(req, res, next) {
    try {
      const hashedPassword = await bcrypt.hash(req.body.password, 10);
      const user = await User.create({
        username: req.body.username,
        email: req.body.email,
        password: hashedPassword
      });

      const emailToken = jwt.sign({ email: req.body.email }, jwt_secret, { expiresIn: '48h' });
      const url = 'http://localhost:8080/users/confirm/' + emailToken;

      await transporter.sendMail({
        to: req.body.email,
        subject: "Confirm your registration",
        html: `<h3>Welcome, you're one step away from registering</h3>
                   <a href="${url}">Click to confirm your registration</a>
                  `,
      });

      res.status(201).send({
        message: "We have sent you an email to confirm your registration",
        user,
      });
    } catch (error) {
      next(error);
    }
  },

  async confirm(req, res) {
    try {
      const token = req.params.emailToken;
      const payload = jwt.verify(token, jwt_secret);

      await User.updateOne(
        { email: payload.email },
        { confirmed: true }
      );

      res.status(201).send("User successfully confirmed");
    } catch (error) {
      console.error(error);
    }
  },

  // Endpoint login user with token
  async login(req, res) {
    try {
      const user = await User.findOne({
        email: req.body.email,
        confirmed: true // Agregar condición de confirmación
      })
      if (!user.confirmed) {
        return res.status(401).send({ message: 'It is necessary to confirm your email' });
      }

      if (!user) {
        return res.status(400).send({ message: 'Invalid email or password' });
      }
      const passwordMatch = await bcrypt.compare(req.body.password, user.password);

      if (!passwordMatch) {
        return res.status(400).send({ message: 'Invalid email or password' });
      }
      // Agregar lógica para verificar contraseña y generar token de acceso

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

  async getById(req, res, next) {
    try {
      const user = await User.findById(req.params._id);
      if (!user) {
        return res.status(404).send({ message: 'User not found' });
      }
      res.send(user);
    } catch (error) {
      next(error);
    }
  },

  async getByUsername(req, res, next) {
    try {
      const users = await User.find({ username: { $regex: req.params.username, $options: 'i' } });
      if (!users || users.length === 0) {
        return res.status(404).send({ message: 'User not found' });
      }
      res.send(users);
    } catch (error) {
      next(error);
    }
  },

};

module.exports = UserController;