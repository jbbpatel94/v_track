const express = require('express');
const router = express.Router();
const passport = require('passport');



// Load Vehicle model
const Vehicle = require('../../models/Vehicle');
const STAGES  = require('./constants').STAGES;

// @route   GET api/vehicle/account/test
// @desc    Tests Vehicle route
// @access  Public
router.get('/test', (req, res) => res.json({ msg: 'Vehicle Works' }));


// @route   PUT api/vehicles/account/register
// @desc    register current Vehicle
// @access  Private
router.put('/payment/:chassisNo', passport.authenticate('jwt', { session: false }), (req, res) => {
    //console.dir(req.body);
    let chassisNo = req.params.chassisNo;
    if(!chassisNo){
    	return res.status(400).json(new Error('Something went wrong.'));
    }
    let { confirmed } = req.body;

    let obj = {};
    let accountsDetails = {};
    let createdAt = new Date().getTime();

    accountsDetails.createdAt = createdAt;
    accountsDetails.payment = confirmed;
    accountsDetails.stage = STAGES.STAGE_PAYMENT_CONFIRMED;
    accountsDetails.changedBy = {
        userId: req.user.id,
        name: req.user.name
    }
    obj.cStage = STAGES.STAGE_PAYMENT_CONFIRMED;
    obj.accountsDetails = accountsDetails
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

// @route   GET api/vehicles/account/search?chassisNo=345467
// @desc    search vehicle
// @access  Private

router.get('/search', passport.authenticate('jwt', { session: false }), (req, res) => {
  //console.log(req.params, req.query);
  Vehicle.findOne({
      $and:[
            {
                chassisNo: req.query.chassisNo
            },
            {
                cStage: STAGES.STAGE_SOLD
            }
        ]
    })
    .then(vehicle => res.json(vehicle))
    .catch(err => res.json(err));
  }
);

module.exports = router;
