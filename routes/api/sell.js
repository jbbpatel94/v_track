const express = require("express");
const router = express.Router();
const passport = require('passport');

// Load Vehicle model
const Vehicle = require('../../models/Vehicle');
const STAGES  = require('./constants').STAGES;

// @route   GET api/vehicles/sell/search
// @desc    search Vehicle
// @access  Private

router.get('/search/:query', passport.authenticate('jwt', { session: false }), (req, res) => {
    //console.log(req.params, req.query);
    Vehicle.find({ $or :[{segment: req.params.query},{'inventory.engineNo': req.params.query}] })
      .then(vehicle => {
       return  res.json(vehicle);
      }
    )
      .catch(err => res.json(err));
    }
  );
  
  module.exports = router;