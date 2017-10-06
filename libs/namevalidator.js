module.exports = {
        
        testName: function (db, name) {
                const p = new Promise((resolve, reject) => {
                        db.collection('users').find({}).toArray( function (err, results) {
                                //console.log(name);
                                
                                for (var i = 0; i < results.length; i++) {
                                        //console.log(results[i].name);
                                        if (results[i].name.includes(name)) {
                                                console.log("found name");
                                                resolve();
                                        }
                                }
                                
                                reject();
                        })  
                })
                
                return p;                      
        }
}