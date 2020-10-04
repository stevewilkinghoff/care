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
 
db.once('open', function() {
    console.log("Connection Successful!");
    
    // define Schema
    const BookSchema = mongoose.Schema({
      name: String,
      price: Number,
      quantity: Number
    });
 
    // compile schema to model
    const Book = mongoose.model('Book', BookSchema, 'bookstore');
 
    // a document instance
    const book1 = new Book({ name: 'Introduction to Mongoose', price: 10, quantity: 25 });
 
    // save model to database
    book1.save(function (err, book) {
      if (err) return console.error(err);
      console.log(book.name + " saved to bookstore collection.");
    });
    
});