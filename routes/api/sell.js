const express = require("express");
const router = express.Router();
const passport = require('passport');

// Load Vehicle model
const Vehicle = require('../../models/Vehicle');
const STAGES  = require('./constants').STAGES;

// @route   GET api/Vehicle/sell/test
// @desc    Tests Vehicle route
// @access  Public
router.get('/test', (req, res) => res.json({ msg: 'Vehicle Works' }));

// @route   GET api/vehicles/sell/search
// @desc    search Vehicle
// @access  Private

router.put('/entry/:chassisNo', passport.authenticate('jwt', { session: false }), (req, res) => {
  //console.dir(req.body);
  let chassisNo = req.params.chassisNo;
  if(!chassisNo){
    return res.status(400).json(new Error('Something went wrong.'));
  }
  let {
    name, adhar, PAN, GSTIN, phone, bankDetail, sellPrice, TCS, FinalSellPrice, CRMInvoice, DAVMSInvoice
  } = req.body;

  let obj = {};
  let sellDetails = {};
  let createdAt = new Date().getTime();
  let customerDetails = {}

  customerDetails.name = name;
  customerDetails.adhar = adhar;
  customerDetails.PAN = PAN;
  customerDetails.GSTIN = GSTIN;
  customerDetails.phone = phone;
  customerDetails.bankDetail = bankDetail;
  customerDetails.TCS = TCS;
  customerDetails.FinalSellPrice = FinalSellPrice;
  customerDetails.CRMInvoice = CRMInvoice;
  customerDetails.DAVMSInvoice = DAVMSInvoice;

  sellDetails.stage = STAGES.STAGE_SOLD;
  sellDetails.createdAt = createdAt;
  sellDetails.customerDetails = customerDetails;
  sellDetails.changedBy = {
    userId: req.user.id,
    name: req.user.name
  }

  obj.cStage = STAGES.STAGE_SOLD;
  obj.updatedAt = createdAt;
  obj.sellDetails = sellDetails;
  

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
