const express = require("express");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT || 3001;
const { dbConnection } = require("./config/config")
const { handleTypeError }= require('./middlewares/errors.js');


app.use(express.json())

dbConnection()

app.use('/users', require('./routes/users'));
app.use('/posts', require('./routes/posts'));
app.use('/comments', require('./routes/comments'));

app.use(handleTypeError)


app.listen(PORT, ()=> console.log(`Server started on port ${PORT}`));