const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');

const users = require('./routes/api/users');
const vehicles = require('./routes/api/inventory');
const sells = require('./routes/api/sell');
const yards = require('./routes/api/yard');

const app = express();

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// DB Config
const db = require('./config/keys').mongoURI;

// Connect to MongoDB
mongoose
  .connect(db)
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "*");
    next();
  });
// Passport middleware
app.use(passport.initialize());

// Passport Config
require('./config/passport')(passport);

// Use Routes
app.use('/api/users', users);
app.use('/api/vehicles/inventory', vehicles);
app.use('/api/vehicles/sell', sells);
app.use('/api/vehicles/yard', yards);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
