module.exports = function () {
    let db = require('./../configs/connect_db')();
    let Schema = require('mongoose').Schema;

    let task = Schema({
        title: String,       
        status: Boolean,
        user: String
    })


    return db.model('tasks', task)
}