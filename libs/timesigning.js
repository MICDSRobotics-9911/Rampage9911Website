const fs = require('fs');

module.exports = (app, db, date) => {

	/**
	 * /signin
	 * @param {string} name the name to be signed in
	 * @return {JSON} a null error if operation was successfull
	 * @throws {error} if name provided wasn't in the database
	 */
	app.post('/signin', (req, res) => {
		/*db.collection('timelogs').find({}).toArray( function (err, results) {
					   for (var i = 0; i < results.length; i++) {
							   if (results[i]._id === date) {
									   console.log(results[i]);
									   results[i].logs.push('hello')
							   }
					   }
			   })*/

		console.log(req.body.name);

		db.collection('timelogs').findOne({_id: date}, (err, doc) => {
			let stop = false;

			for (const log of doc.logs) {
				if (log.name.includes(req.body.name)) {
					res.json({
						error: 'member has already signed in today'
					});

					stop = true;
					break;
				}
			}

			if (stop === false) {
				// validate the name
				require(__dirname + '/namevalidator.js').testName(db, req.body.name).then(() => {
					const temp = doc.logs;
					const template = {
						'name': req.body.name,
						'signin': new Date(),
						'signout': null,
						'difference': null
					};

					temp.push(template);

					db.collection('timelogs').update({_id: date}, {logs: temp});

					res.json({
						error: null
					});
				})
					.catch(() => {
						res.json({
							error: 'name provided not in database'
						});
					});
			}
		});
	});

	/**
	 * /signout
	 * @param {string} name the name to be signed out
	 * @return {JSON} null error if there wasn't a problem
	 * @return {error} if the name provided wasn't in the database
	 */
	app.post('/signout', (req, res) => {
		// find the name in the db, update the signout
		//res.end('hello from signout');

		// get the correct date
		db.collection('timelogs').findOne({_id: date}, (err, doc) => {
			// TODO: see if this can be converted to `for..of`
			for (let i = 0; i < doc.logs.length; i++) {
				if (doc.logs[i].name.includes(req.body.name)) {
					const temp = doc.logs;
					temp[i].signout = new Date();

					const signin = new Date(temp[i].signin);
					const signout = new Date(temp[i].signout);

					console.log(signin.getHours() + ':' + signin.getMinutes() + ':' + signin.getSeconds());
					console.log(signout.getHours() + ':' + signout.getMinutes() + ':' + signout.getSeconds());

					const difHours = signout.getHours() - signin.getHours();
					const difMinutes = signout.getMinutes() - signin.getMinutes();
					const difSeconds = signout.getSeconds() - signin.getSeconds();
					console.log(`Difference: ${Math.abs(difHours)}:${Math.abs(difMinutes)}:${Math.abs(difSeconds)}`);

					temp[i].difference = `${Math.abs(difHours)}:${Math.abs(difMinutes)}:${Math.abs(difSeconds)}`;

					console.log(temp);

					// update the database
					db.collection('timelogs').update({_id: date}, {logs: temp});
					break;
				}
			}
			res.json({
				error: null
			});
		});
	});

	/**
	 * /newmember adds a new member to the database
	 * @param member the name to be added
	 * @return {JSON} null error if there wasn't a problem
	 */
	app.post('/newmember', (req, res) => {
		db.collection('users').insertOne({name: req.body.member});
		res.json({
			error: null
		});
	});

	/**
	 * /lastlog gets a CSV file of the last log
	 * @return {CSV} a CSV file of the current log
	 */
	app.get('/lastlog', (req, res) => {
		db.collection('timelogs').find({}).toArray((err, results) => {
			const last = results[results.length - 1].logs;
			let output = '';

			for (const log of last) {
				output += `${log.name},${log.difference}\n`;
			}

			fs.writeFileSync('lastlog.csv', output);

			res.download(__dirname + '/../lastlog.csv');
		});
	});
};
