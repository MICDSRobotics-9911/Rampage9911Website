module.exports = (app, db) => {
        app.get('/account/create', (req, res) => {
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
        })
}
