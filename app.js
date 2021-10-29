require('./db');

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

// enable sessions
const session = require('express-session');
const sessionOptions = {
    secret: 'secret cookie thang (store this elsewhere!)',
    resave: true,
    saveUninitialized: true
};
app.use(session(sessionOptions));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// body parser setup
app.use(bodyParser.urlencoded({ extended: false }));

// serve static files
app.use(express.static(path.join(__dirname, 'public')));

// '/' - the sign up page
app.get('/', (req, res) => {
    res.render('index');
});

// '/login' - the authentication page
app.get('/login', (req, res) => {
    res.render('authen');
});

// '/clock' - the authentication page
app.get('/clock', (req, res) => {
    res.render('clock');
});

// '/stat' - the authentication page
app.get('/stat', (req, res) => {
    res.render('stat');
});

app.listen(3000);