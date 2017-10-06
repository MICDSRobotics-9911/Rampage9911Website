module.exports = (app, db, date) => {
        app.post('/signin', (req, res) => {
               /*db.collection('timelogs').find({}).toArray( function (err, results) {
                       for (var i = 0; i < results.length; i++) {
                               if (results[i]._id === date) {
                                       console.log(results[i]);
                                       results[i].logs.push('hello')
                               }
                       }
               })*/
               
               db.collection('timelogs').findOne({_id: date}, function (err, doc) {
                       // validate the name
                       require(__dirname + '/namevalidator.js').testName(db, req.body.name).then(() => {
                               var temp = doc.logs;
                               var template = {
                                       "name": req.body.name,
                                       "signin": new Date(),
                                       "signout": null
                               }
                               
                               temp.push(template);
                               
                               db.collection('timelogs').update({_id: date}, {logs: temp});
                               
                               res.end('done');  
                       })
                       .catch(() => {
                               res.end('name not valid');
                       })
               })
        });
        
        app.post('/signout', (req, res) => {
                // TODO: find the name in the db, update the signout
                //res.end('hello from signout');
                
                // get the correct date
                db.collection('timelogs').findOne({_id: date}, function (err, doc) {
                        for (var i = 0; i < doc.logs.length; i++) {
                                console.log(doc.logs[i].name);
                                if (doc.logs[i].name.includes(req.body.name)) {
                                        var temp = doc.logs;
                                        temp[i].signout = new Date();
                                        
                                        console.log(temp);
                                        
                                        // update the database
                                        db.collection('timelogs').update({_id: date}, {logs: temp});
                                        break;
                                }
                                else {
                                        console.log('fail');
                                }
                        }
                        console.log(doc);
                        res.end('done');
                })
        });
}