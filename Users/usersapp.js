const express = require('express');
const bodyParser = require('body-parser');
//const mongoose = require('mongoose');

//const placesRoutes = require('./routes/places-routes');
const usersRoutes = require('./usersroutes');
//const HttpError = require('./models/http-error');
const residentRoutes = require('./residentsroute');

const assessmentRoutes = require('./assessmentsroute');

const employeeRoutes = require('./employeesroute');

const employeeOrientationRoutes = require('../Employees/employeeorientationsroute');

const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE');

  next();
});

//app.use('/api/places', placesRoutes);
app.use('/api/users', usersRoutes);
app.use('/api/residents', residentRoutes);
app.use('/api/assessments', assessmentRoutes);
app.use('/api/employees', employeeRoutes);
app.use('/api/employeeorientation', employeeOrientationRoutes);

//app.use((req, res, next) => {
//  const error = new HttpError('Could not find this route.', 404);
//  throw error;
//});

app.use((error, req, res, next) => {
  if (res.headerSent) {
    return next(error);
  }
  res.status(error.code || 500);
  res.json({ message: error.message || 'An unknown error occurred!' });
});

//mongoose
//  .connect(
//    `mongodb+srv://academind:ORlnOPLKvIH9M9hP@cluster0-ntrwp.mongodb.net/mern?retryWrites=true&/w=majority`
//  )
//  .then(() => {
//    app.listen(5000);
//  })
//  .catch(err => {
//    console.log(err);
//  });


  // parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse requests of content-type - application/json
app.use(bodyParser.json())

// Then use it before your routes are set up:
//app.use(cors());

// define a simple route
app.get('/', (req, res) => {
    res.json({"message": "Welcome to EasyNotes application. Take notes quickly. Organize and keep track of all your notes."});
});

// listen for requests
app.listen(4002, () => {
    console.log("Server is listening on port 4002");
});

// Configuring the database
const dbConfig = require('../config/keys');
const mongoose = require('mongoose');

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
