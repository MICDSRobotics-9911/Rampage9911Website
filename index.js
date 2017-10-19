const express = require('express');
const app = express();

// database
const MongoClient = require('mongodb').MongoClient;

//var url = require(__dirname + '/config.json').mongoURI;
const bodyParser = require('body-parser');
const hashGen = require('hash-generator');
//var jsonParser = bodyParser.json();

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : false }));

app.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
	next();
});

// 'front-end' routing
require(__dirname + '/routing.js')(app);

let config;
try {
	config = require(__dirname + '/config.json');
} catch (err) {
	throw new Error('Check to see if config file is valid!');
}

let url;
if (config.production) {
	url = config.mongoURI;
} else {
	url = config.testingURI;
}

MongoClient.connect(url, (err, db) => {
	const todayID = hashGen(8);
	console.log(todayID);

	db.collection('timelogs').insertOne({_id: todayID, 'date': new Date(), 'logs': []}, (err) => {
		if (err) {
			throw err;
		}
	});

	console.log('Connected to db');

	// register database-dependent routes
	require(__dirname + '/libs/timesigning.js')(app, db, todayID);
});

// goes outside out db connection
app.listen(1200, () => {
	console.log('Server started');
});
