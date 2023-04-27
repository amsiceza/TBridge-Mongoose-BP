const nodemailer = require("nodemailer");
let transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "your-mail@gmail.com",
    pass: null,
  },
});
module.exports = transporter;
