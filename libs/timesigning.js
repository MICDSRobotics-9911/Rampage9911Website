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
               
               console.log(req.body.name);
               
               db.collection('timelogs').findOne({_id: date}, function (err, doc) {
                       var stop = false;
                       
                       for (var e = 0; e < doc.logs.length; e++) {
                               if (doc.logs[e].name.includes(req.body.name)) {
                                       res.json({
                                               error: "member has already signed in today"
                                       })
                                       
                                       stop = true;
                                       break;
                               }
                       }
                       
                       if (stop === false) {
                               // validate the name
                               require(__dirname + '/namevalidator.js').testName(db, req.body.name).then(() => {
                                       var temp = doc.logs;
                                       var template = {
                                               "name": req.body.name,
                                               "signin": new Date(),
                                               "signout": null,
                                               "difference": null
                                       }
                                       
                                       temp.push(template);
                                       
                                       db.collection('timelogs').update({_id: date}, {logs: temp});
                                       
                                       res.json({
                                               error: null
                                       })  
                               })
                               .catch(() => {
                                       res.json({
                                               error: "name provided not in database"
                                       })
                               })
                       }
               })
        });
        
        app.post('/signout', (req, res) => {
                // find the name in the db, update the signout
                //res.end('hello from signout');
                
                // get the correct date
                db.collection('timelogs').findOne({_id: date}, function (err, doc) {
                        for (var i = 0; i < doc.logs.length; i++) {
                                if (doc.logs[i].name.includes(req.body.name)) {
                                        var temp = doc.logs;
                                        temp[i].signout = new Date();
                                        
                                        var signin = new Date(temp[i].signin);
                                        var signout = new Date(temp[i].signout);
                                        var difference = new Date(signout - signin);
                                        
                                        console.log(signin.getHours() + ":" + signin.getMinutes() + ":" + signin.getSeconds());
                                        console.log(signout.getHours() + ":" + signout.getMinutes() + ":" + signout.getSeconds());
                                        
                                        var difHours = signout.getHours() - signin.getHours();
                                        var difMinutes = signout.getMinutes() - signin.getMinutes();
                                        var difSeconds = signout.getSeconds() - signin.getSeconds();
                                        console.log(`Difference: ${Math.abs(difHours)}:${Math.abs(difMinutes)}:${Math.abs(difSeconds)}`);
                                        
                                        temp[i].difference = `${Math.abs(difHours)}:${Math.abs(difMinutes)}:${Math.abs(difSeconds)}`
                                        
                                        console.log(temp);
                                        
                                        // update the database
                                        db.collection('timelogs').update({_id: date}, {logs: temp});
                                        break;
                                }
                        }
                        res.json({
                                error: null
                        })
                })
        });
        
        app.post('/newmember', (req, res) => {
                db.collection('users').insertOne({name: req.body.member});
                res.json({
                        error: null
                })
        });
        
        app.get('/lastlog', (req, res) => {
                db.collection('timelogs').find({}).toArray(function (err, results) {
                        var last = results[results.length - 1].logs;
                        var output = "";
                        
                        for (var e = 0; e < last.length; e++) {                                
                                output += `${last[e].name},${last[e].difference}\n`
                        }
                        
                        var fs = require('fs');
                        fs.writeFile("lastlog.csv", output, (err) => {
                                if (!err) {
                                     console.log("lastlog outputted");   
                                }
                        })                        
                        
                        res.json({
                                error: null,
                                lastlog: output
                        })
                })
        });
}