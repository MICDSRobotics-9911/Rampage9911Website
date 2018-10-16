module.exports = (app) => {
	/**
	 * Main page endpoint
	 */
	app.get('/', (req, res) => {
		res.render('pages/index');
	});

	/**
	 * About page endpoint
	 * @name about
	 */
	app.get('/about', (req, res) => {
		res.render('pages/about');
	});

	/**
	 * Contact page endpoint
	 * @name contact
	 */
	app.get('/contact', (req, res) => {
		res.render('pages/contact');
	});

	/**
	 * Programming page endpoint
	 * @name programming
	 */
	app.get('/programming', (req, res) => {
		res.render('pages/programming');
	});

	/**
	 * Robot page endpoint
	 * @name robot
	 */
	app.get('/robot', (req, res) => {
		res.render('pages/robot');
	});

	/**
	 * FIRST page endpoint
	 * @name first
	 */
	app.get('/first', (req, res) => {
		res.render('pages/first');
	});

	app.get('/profile', (req, res) => {
		res.render('pages/profile')
	})

	app.get('/newprofile', (req, res) => {
		res.render('pages/createprofile')
	})
};
