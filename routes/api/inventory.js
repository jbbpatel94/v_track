const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const keys = require('../../config/keys');
const passport = require('passport');



// Load Vehicle model
const Vehicle = require('../../models/Vehicle');
const STAGES  = require('./constants').STAGES;

// @route   GET api/Vehicle/test
// @desc    Tests Vehicle route
// @access  Public
router.get('/test', (req, res) => res.json({ msg: 'Vehicle Works' }));

// @route   POST api/Vehicles/inventory/register
// @desc    register current Vehicle
// @access  Private
router.post('/register', passport.authenticate('jwt', { session: false }), (req, res) => {
    //console.dir(req.body);
    Vehicle.findOne({ chassisNo: req.body.chassisNo }).then(vehicle => {
      if(vehicle){
        console.log(vehicle);
        return res.status(400).json({msg: 'Vehicle already exists.'});
      } else {
        let vehicle = new Vehicle();
        let { chassisNo, segment } = req.body;
        

        if(!chassisNo || !segment){
          return res.status(400).json({message: `${ chassisNo ? "segment" : "chassisNo"} should not empty.`});
        }

        let inventory = {};
        let createdAt = new Date().getTime();

        inventory.stage = STAGES.STAGE_TRANSIT;
        inventory.createdAt = createdAt;
        inventory.tmlInvoiceNo = req.body.tmlInvoiceNo;
        inventory.modalNo = req.body.modalNo;
        inventory.engineNo = req.body.engineNo;

        inventory.changedBy = {
          userId: req.body.userId,
          name: req.body.userName 
        };

        inventory.pricing = {
          unitPrice: req.body.unitPrice,
          RDC: req.body.RDC,
          CGST: req.body.CGST,
          IGST: req.body.IGST,
          SGST: req.body.SGST,
          CESS: req.body.CESS,
          invoiceValue: req.body.invoiceValue

        }

        vehicle.chassisNo = req.body.chassisNo;
        vehicle.segment = req.body.segment;
        vehicle.cStage = STAGES.STAGE_TRANSIT;
        vehicle.inventory = inventory;
        vehicle.createdAt = createdAt;
        vehicle.updatedAt = createdAt;

        vehicle.save()
          .then(vehicle => res.json(vehicle))
          .catch(err => res.json(err));
      }
    });
    
   
  }
);

// @route   GET api/Vehicles/inventory/search?chassisNo=345467
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
