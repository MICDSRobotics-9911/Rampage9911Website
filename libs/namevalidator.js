module.exports = {

	/**
	 * Tests if a name is valid
	 * @param  {Database} db the current database instance
	 * @param  {string} name the name to be tested
	 * @return {Promise} the result in a promise
	 */
	testName(db, name) {
		return new Promise((resolve, reject) => {
			db.collection('users').find({}).toArray( (err, results) => {
				//console.log(name);
				for (const result of results) {
					if (result.name.includes(name)) {
						console.log('found name');
						resolve();
					}
				}
				reject();
			});
		});
	}
};
