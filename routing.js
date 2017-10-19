module.exports = (app) => {
	app.get('/', (req, res) => {
		res.render('pages/index');
	});

	app.get('/about', (req, res) => {
		res.render('pages/about');
	});

	app.get('/contact', (req, res) => {
		res.render('pages/contact');
	});

	app.get('/programming', (req, res) => {
		res.render('pages/programming');
	});

	app.get('/robot', (req, res) => {
		res.render('pages/robot');
	});

	app.get('/log', (req, res) => {
		res.render('pages/timelogging');
	});
};
