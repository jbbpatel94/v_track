const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const keys = require('../../config/keys');
const passport = require('passport');



// Load Vehicle model
const Vehicle = require('../../models/Vehicle');

// @route   GET api/Vehicle/test
// @desc    Tests Vehicle route
// @access  Public
router.get('/test', (req, res) => res.json({ msg: 'Vehicle Works' }));

// @route   POST api/Vehicles/register
// @desc    register current Vehicle
// @access  Private
router.post('/register', passport.authenticate('jwt', { session: false }), (req, res) => {
    //console.dir(req.body);
    Vehicle.findOne({ chassisNo: req.body.chassisNo }).then(vehicle => {
      if(vehicle){
        console.log(vehicle);
        return res.status(400).json({msg: 'Vehicle already exists.'});
      } else {
        let vehicle = new Vehicle(req.body);
        vehicle.save()
          .then(vehicle => res.json(vehicle))
          .catch(err => res.json(err));
      }
    });
    
   
  }
);

// @route   GET api/Vehicles/search
// @desc    search Vehicle
// @access  Private
router.get('/search', passport.authenticate('jwt', { session: false }), (req, res) => {
    //console.dir(req.body);
    Vehicle.findOne({ chassisNo: req.body.chassisNo }).then(vehicle => {
      if(vehicle){
        console.log(vehicle);
        return res.status(400).json({msg: 'Vehicle already exists.'});
      } else {
        let vehicle = new Vehicle(req.body);
        vehicle.save()
          .then(vehicle => res.json(vehicle))
          .catch(err => res.json(err));
      }
    });
    
   
  }
);

module.exports = router;
