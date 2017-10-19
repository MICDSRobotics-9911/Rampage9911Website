module.exports = {
        
        /**
         * Tests if a name is valid
         * @param  {Database} db the current database instance
         * @param  {string} name the name to be tested
         * @return {Promise} the result in a promise
         */
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
        },
        
        checkPassword: function (db, name, pass) {
                return new Promise((resolve, reject) => {
                        // preliminary check password
                        db.collection('users').findOne({"name": name}, function (err, doc) {
                                  require('bcrypt').compare(pass, doc.password, function (err, res) {
                                            if (!err) {
                                                    resolve(res);
                                            }
                                            else {
                                                    reject(err);
                                            }
                                  })
                        })
                })
        }
}