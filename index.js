var express = require('express');
var app = express();

var bodyParser = require('body-parser');
//var jsonParser = bodyParser.json();

var database = require(__dirname + '/timelogger/logs.json');

app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : false }));

app.get('/', function (req, res) {
	res.render('pages/index');
})

var date = new Date();
database.meetings.push(date.toString());

app.post('/time/signin', function (req, res) {
	var template = {
		"member":"",
		"sigin":"",
		"signout":""
	}
	res.end(member);
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