const mongoose = require("mongoose");

const vehicleCountSchema = new mongoose.Schema({
  light_1: {
    type: Number,
    required: true,
  },
  light_2: {
    type: Number,
    required: true,
  },
  // light_3: {
  //   type: Number,
  //   required: true,
  // },
  // light_4: {
  //   type: Number,
  //   required: true,
  // },
});

module.exports = mongoose.model("vehicleCounts", vehicleCountSchema);
