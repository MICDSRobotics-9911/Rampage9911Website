var express = require('express');
var app = express();

app.set('view engine', 'ejs');

app.get('/', function (req, res) {
	res.render('pages/index');
})

app.get('/about', function (req, res) {
	res.render('pages/about');
})

app.get('/contact', function (req, res) {
	res.render('pages/contact');
})

app.get('/programming', function (req, res) {
	res.render('pages/programming');
})

app.get('/robot', function (req, res) {
	res.render('pages/robot');
})

app.use(express.static(__dirname + '/public'));

app.listen(1200, () => {
	console.log("Server started");
});