const mongoose = require('mongoose');
let db;

module.exports = function () {
    if (!db) {
        try {
            const uri = "mongodb+srv://dbFriends:db123@cluster0.vqje0.mongodb.net/todolist?retryWrites=true&w=majority";
            db = mongoose.createConnection(uri, {
                useNewUrlParser: true,
                useUnifiedTopology: true
            });

            //  db = mongoose.createConnection("mongodb+srv://dbFriends:<password>@cluster0.vqje0.gcp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", { useNewUrlParser:true})
        } catch (e) {
            console.log("Erro ao conectar ao banco de dados " + e)
        }
    }

    return db;
}