const mongoose = require('mongoose');
const { Schema } = mongoose;

// Configuring the database
const dbConfig = require('../config/keys');
//const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

// Connecting to the database
mongoose.connect(dbConfig.mongoURI, {
    useUnifiedTopology: true,
    useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the database");
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});

const userSchema = new Schema({
  name: String,
  });

mongoose.model('residents', userSchema);

// Create the model
const NoteSchema = mongoose.Schema({
    name: String,
    room: String
}, {
    timestamps: true
});
