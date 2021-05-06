module.exports = function(){
    let db = require('./../configs/connect_db')();
    let Schema = require('mongoose').Schema;

    let user = Schema({       
        user: String,
        password:String      
    })


    return db.model('users',user)
}

