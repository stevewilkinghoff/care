const dbconnection = require('../config/keys');
const mongoose = require('mongoose');
 
// make a connection
mongoose.connect(dbconnection.mongoURI,{
    useUnifiedTopology:true,
    useNewUrlParser: true
});
 
// get reference to database
const db = mongoose.connection;
 
db.on('error', console.error.bind(console, 'connection error:'));
 
db.once('open', function() {console.log("Connection Successful!")});