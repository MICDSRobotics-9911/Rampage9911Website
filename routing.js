module.exports = (app) => {
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
        
        app.get('/first', function (req, res) {
        	res.render('pages/first');
        })
}