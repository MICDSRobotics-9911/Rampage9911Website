var express = require('express');
var app = express();

// databse stuff
var MongoClient = require('mongodb').MongoClient,
	assert = require('assert');

var url = require(__dirname + '/config.json').mongoURI;
var bodyParser = require('body-parser');
var hashGen = require('hash-generator');
//var jsonParser = bodyParser.json();

app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : false }));

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

MongoClient.connect(url, function (err, db) {
	
	var todayID = hashGen(8);
	console.log(todayID);
	
	if (require(__dirname + '/config.json').production) {
		db.collection('timelogs').insert({_id: todayID, 'test': 'hello'}, (err) => {
			if (err) {
				throw err;
			}
		});
	}
	
	console.log('Connected to db');
	
	// register routes
	require(__dirname + '/libs/timesingning.js')(app, db, todayID);
	//db.close();
})

// goes outside out db connection
app.listen(1200, () => {
	console.log("Server started");
});