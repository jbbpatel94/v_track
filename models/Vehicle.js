const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const VehicleSchema = new Schema({
  chassisNo: {
    type: String,
    required: true,
    unique: true
  },
  segment: {
    type: String,
    required: true,
  },
  cStage: {
    type: String,
    required: true
  },
  inventory: {
    type: Schema.Types.Mixed
    
      // createdAt: {
      //   type: Date,
      //   default: Date.now
      // },
      // tmlInvoiceNo: {
      //   type: String,
      //   required: true,
      // },
      // modalNo: {
      //   type: String,
      //   required: true,
      // },
      // engineNo: {
      //   type: String,
      //   required: true,
      // },
      // state: {
      //   type: String,
      //   required: true,
      // },
      // changedBy: {
      //   type: mongoose.Schema.Types.ObjectId,
      //   ref: 'User' 
      // }
      // pricing: {
      //   unitPrice: {
      //     type: String,
      //     required: true,
      //   },
      //   RDC: {
      //     type: String,
      //     required: true,
      //   },
      //   CGST: {
      //     type: String,
      //     required: true,
      //   },
      //   IGST:{
      //     type: String,
      //     required: true,
      //   },
      //   SGST: {
      //     type: String,
      //     required: true,
      //   },
      //   CESS: {
      //     type: String,
      //     required: true,
      //   },
      //   invoiceValue: {
      //     type: String,
      //     required: true,
      //   }
      // }
    },
    yardDetails: {
      type: Schema.Types.Mixed
    },
    createdAt: Date,
    updatedAt: Date
  },
  {
    strict: false
  }
);

// stage{
//   name
//   action_log: {user, date, }
//   action_data : {invoicenum, rdc, .....}
// }

module.exports = Vehicle = mongoose.model('Vehicle', VehicleSchema);
