var express = require('express');
var app = express();

// database
var MongoClient = require('mongodb').MongoClient;

//var url = require(__dirname + '/config.json').mongoURI;
var bodyParser = require('body-parser');
var hashGen = require('hash-generator');
//var jsonParser = bodyParser.json();

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : false }));

// 'front-end' routing
require(__dirname + '/routing.js')(app);

try {
	require(__dirname + '/config.json');
}
catch (err) {
	throw new Error('Check to see if config file is valid!')
}

var url = require(__dirname + '/config.json').mongoURI;

MongoClient.connect(url, function (err, db) {
	
	var todayID = hashGen(8);
	console.log(todayID);
	
	if (require(__dirname + '/config.json').production) {
		db.collection('timelogs').insertOne({_id: todayID, 'date': new Date(), 'logs': []}, (err) => {
			if (err) {
				throw err;
			}
		});
	}
	
	console.log('Connected to db');
	
	// register database-dependent routes
	require(__dirname + '/libs/timesigning.js')(app, db, todayID);
})

// goes outside out db connection
app.listen(1200, () => {
	console.log("Server started");
});