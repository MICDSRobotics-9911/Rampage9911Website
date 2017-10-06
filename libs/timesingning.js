module.exports = (app, db, date) => {
        app.get('/test', (req, res) => {
               res.end('hello');
        });
}