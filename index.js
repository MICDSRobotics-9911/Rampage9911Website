var express = require('express');
var app = express();

// database
var MongoClient = require('mongodb').MongoClient;

var bodyParser = require('body-parser');

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : false }));

app.use(function (req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
})

// 'front-end' routing
require(__dirname + '/routing.js')(app);

try {
	require(__dirname + '/config.json');
}
catch (err) {
	throw new Error('Check to see if config file is valid!')
}

var url = "";

if (require(__dirname + '/config.json').production) {
	url = require(__dirname + '/config.json').mongoURI;
}
else {
	url = require(__dirname + '/config.json').testingURI;
}

MongoClient.connect(url, function (err, db) {
	console.log('Connected to db');
})

// goes outside out db connection
app.listen(1200, () => {
	console.log("Server started");
});