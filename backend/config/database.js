const mongoose = require("mongoose");
//connect foi depreciado usar agora o createConnection
// add isso para que não dê erro na hora de fazer as requisições pelo postman: mongoose.Promise = global.Promise;
mongoose.Promise = global.Promise;
module.exports = mongoose.createConnection("mongodb://localhost/db_finance");
