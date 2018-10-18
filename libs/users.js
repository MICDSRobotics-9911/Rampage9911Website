module.exports = (app, db) => {
	/*app.get('/account/create', (req, res) => {
                db.run(`INSERT INTO userdata (username, password, email) VALUES ('${req.param('name')}', '${req.param('password')}', '${req.param('email')}')`, [], function (error) {
                        if (error) {
                                console.log(error);
                                res.json({
                                        error: true,
                                        message: error
                                })
                        }
                        else {
                                res.json({
                                        error: false,
                                        message: null
                                })
                        }
                })
        })*/

	app.post('/email/submit', (req, res) => {
		db.run('INSERT INTO maillist (email) VALUES (?)', req.body.email, (error) => {
			if (error) {
				console.log(error);
				res.json({
					error: true,
					message: error
				});
			}
			else {
				res.json({
					error: false,
					message: null
				});
			}
		});
	});
};
