const express = require('express');
const router = express.Router();
const passport = require('passport');



// Load Vehicle model
const Vehicle = require('../../models/Vehicle');
const STAGES  = require('./constants').STAGES;

// @route   GET api/Vehicle/yard/test
// @desc    Tests Vehicle route
// @access  Public
router.get('/test', (req, res) => res.json({ msg: 'Vehicle Works' }));

// @route   PUT api/vehicles/yard/entry
// @desc    update entry at yard receiving
// @access  Private
router.put('/entry/:chassisNo', passport.authenticate('jwt', { session: false }), (req, res) => {
    //console.dir(req.body);
    let chassisNo = req.params.chassisNo;
    if(!chassisNo){
    	return res.status(400).json(new Error('Something went wrong.'));
    }
    let {
      yard, toolkit, stepney, jack, jackRoad, wiperMotorAssy, sideGlasses, serviceBook, tireDetails, battery
    } = req.body;

    let obj = {};
    let yardDetails = {};
    let createdAt = new Date().getTime();

    yardDetails.toolkit = toolkit;
    yardDetails.stepney = stepney;
    yardDetails.jack = jack;
    yardDetails.jackRoad = jackRoad;
    yardDetails.wiperMotorAssy = wiperMotorAssy;
    yardDetails.sideGlasses = sideGlasses;
    yardDetails.serviceBook = serviceBook;
    yardDetails.tireDetails = tireDetails;
    yardDetails.battery = battery;

    yardDetails.changedBy = {
      userId: req.user.id,
      name: req.user.name
    }
    
    yardDetails.createdAt = createdAt;

    obj.cStage = STAGES.STAGE_YARD;
    obj.yard = yard;
    obj.yardDetails = yardDetails
    obj.updatedAt = createdAt;

    Vehicle.findOneAndUpdate(
      {
        chassisNo: chassisNo
      },
      {
        $set: {
          ...obj
        }
      },
      {
        new: true
      }
    )
    .then(vehicle => {
      if(!vehicle){
        return res.status(400).json({message: "Something went wrong."});
      } else {
        return res.status(200).json(vehicle);
      }
    })
    .catch(err => res.status(404).json(new Error('Something went wrong.')));

  }
);

// @route   GET api/Vehicles/yard/search?chassisNo=345467
// @desc    search Vehicle
// @access  Private
router.get('/search', passport.authenticate('jwt', { session: false }), (req, res) => {
  //console.log(req.params, req.query);
  Vehicle.findOne({ chassisNo: req.query.chassisNo })
    .then(vehicle => res.json(vehicle))
    .catch(err => res.json(err));
  }
);

module.exports = router;
