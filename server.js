const express = require('express')
const app = express()
require('dotenv').config({ path: 'process.env.MONGODB_URI' });

const uri = process.env.MONGODB_URI
require('dotenv').config()
//console.log(process.env.MONGODB_URI)
let bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
const MongoClient = require('mongodb').MongoClient;
//const uri = "mongodb+srv://telvin:glhMwHZZKoJ7f5Dy@cluster0.ofaqd.mongodb.net/whiteboard-02?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
const mongoose = require('mongoose')
mongoose.connect(
//     'mongodb://localhost:27017/whiteboard-02',
    uri,
    {useNewUrlParser: true, useUnifiedTopology: true})

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers',
        'Content-Type, X-Requested-With, Origin');
    res.header('Access-Control-Allow-Methods',
        'GET, POST, PUT, PATCH, DELETE, OPTIONS');
    next();
});

require('./controllers/quizzes-controller')(app)
require('./controllers/question-controller')(app)
require('./controllers/quiz-attempts-controller')(app)

app.listen(process.env.PORT);
app.listen(4000)

//"mongodb+srv://telvin:glhMwHZZKoJ7f5Dy@cluster0.ofaqd.mongodb.net/whiteboard-02?retryWrites=true&w=majority"