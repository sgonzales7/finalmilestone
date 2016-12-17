var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var pgp = require('pg-promise')();
var db = pgp('postgres://postgres:4751@localhost:5432/hs');
var scores = require('./scores.js');
require('dotenv').load();

app.use(express.static(__dirname + '/css'));

app.set('view engine', 'ejs');

app.set('views', __dirname + '/views');

app.use(bodyParser.urlencoded({extended: false}));

app.use(bodyParser.json());


//getting users
app.get('/', function(req, res, next){
    db.any('SELECT * FROM posts')
        .then(function(data){
            return res.render("index", {data:data, name:'Home', nav1: 'Contact', nav2: 'Quiz', nav3: 'High Scores'})
        })
        .catch(function(err){
            return next(err);
        });
});

app.get('/game', function(req, res, next){
    db.any('SELECT * FROM posts')
        .then(function(data){
            res.render("game", {data:data, name:'Home', nav1: 'Contact', nav2: 'Quiz', nav3: 'High Scores'})
        })
        .catch(function(err){
            return next(err);
        });
});

app.get('/newscore', function(req, res, next){
    db.any('SELECT * FROM posts')
        .then(function(data){
            res.render("newscore", {data:data, name:'Home', nav1: 'Contact', nav2: 'Quiz', nav3: 'High Scores'})
        })
        .catch(function(err){
            return next(err);
        });
});

app.get('/highscores', function(req, res, next){
    db.any('SELECT * FROM posts')
        .then(function(data){
            res.render("scores", {data:data, name:'Home', nav1: 'Contact', nav2: 'Quiz', nav3: 'High Scores'})
        })
        .catch(function(err){
            return next(err);
        });
});

app.get('/contact', function(req, res, next){
    db.any('SELECT * FROM posts')
        .then(function(data){
            res.render("contact.ejs", {data:data, name:'Home', nav1: 'About Us', nav2: 'Game', nav3: 'High Scores'})
        })
        .catch(function(err){
            return next(err);
        });
});

app.post('/game', function(req,res,next){
    db.none('insert into posts(name, email, score)' +
        'values(${name}, ${email}, ${score})',
        req.body)
        .then(function () {
            res.redirect('/highscores');
        })
        .catch(function (err) {
            return next(err);
        });
});

app.listen(process.env.PORT, function(){
    console.log("The server is running on localhost:3000")
});