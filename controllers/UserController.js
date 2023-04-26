const User = require("../models/user");

const jwt = require('jsonwebtoken');
const { jwt_secret } = require('../config/keys.js')
const transporter = require("../config/nodemailer");

const UserController = {

    //Endpoint register user
    async register(req, res, next) {
        try {
            const user = await User.create(req.body);
            await transporter.sendMail({
                to: req.body.email,
                subject: "Confirme su registro",
                html: `<h3>Bienvenido, estás a un paso de registrarte </h3>
                <a href="#"> Click para confirmar tu registro</a>
                `,
            });
            res.status(201).send({
                message: "Te hemos enviado un correo para confirmar el registro",
                user,
            });
        } catch (error) {
            next(error);
        }
    },

    async confirm(req, res) {
        try {
            const user = await User.findOneAndUpdate(
                { email: req.params.email, confirmed: false },
                { confirmed: true },
                { new: true }
            );
    
            if (!user) {
                return res.status(404).send("No se pudo encontrar el usuario o ya ha sido confirmado");
            }
    
            res.status(200).send("Usuario confirmado con éxito");
    
        } catch (error) {
            console.error(error);
            res.status(500).send("Error interno del servidor");
        }
    },

    // Endpoint login user with token
    async login(req, res) {
        try {
            const user = await User.findOne({
                email: req.body.email,
                confirmed: true // Agregar condición de confirmación
            })

            if (!user) {
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


};

module.exports = UserController;