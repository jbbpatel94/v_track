const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const VehicleSchema = new Schema({
  chassisNo: {
    type: String,
    required: true,
    unique: true
  },
  cStage: {
    type: String,
    required: true
  },
  stages: [{
      name: {
        type: String,
        required: true
      },
      createdAt: {
        type: Date,
        default: Date.now
      }
            // changedBy: {
      //   type: mongoose.Schema.Types.ObjectId, 
      //   ref: 'User' 
      // }

  }]

  },
  {
    timestamps: true
  }
);

// stage{
//   name
//   action_log: {user, date, }
//   action_data : {invoicenum, rdc, .....}
// }

module.exports = Vehicle = mongoose.model('Vehicle', VehicleSchema);
