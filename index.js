const express = require('express');
const mongoose = require('mongoose');
const http = require('http');

const keys = require('./config/keys');


const app = express();

app.get('/', function (req, res) {
    res.send('Hello World!');
  });

app.get('/api/resident', function(req, res) {
    res.send("This is a page to add stuff to resident");
});

app.get('/resident', function(req, res) {
    res.send('This is a test resident page.');
});

if (process.env.NODE_ENV==='production'){
    // Express will serve up production assets
    app.use(express.static('client/build'));

    // Express will serve up html file if it doesnt' recognize route
}


const PORT = process.env.PORT || 5000;
//const PORT = process.env.PORT || 4001;
console.log('Care Cottages Node Server running on port ' + PORT);
app.listen(PORT);

registerServiceWorker(); 
