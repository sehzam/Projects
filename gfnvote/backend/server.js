const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true
});

const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully")
});


const usersRouter = require('./routes/users');
const coursesRouter = require('./routes/courses');
const formsRouter = require('./routes/forms');
const logsRouter = require('./routes/log');


app.use('/users', usersRouter);
app.use('/courses', coursesRouter);
app.use('/forms', formsRouter);
app.use('/logs', logsRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`)
});