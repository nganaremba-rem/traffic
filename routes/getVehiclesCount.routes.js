const vehicleCountModel = require("../model/vehicleCountModel");
const router = require("express").Router();

router.get("/", async (req, res) => {
  try {
    const response = await vehicleCountModel.find();
    return res.send(response);
  } catch (err) {
    return res.status(500).json({
      message: err.message,
    });
  }
});

router.get("/current", async (req, res) => {
  try {
    const response = await vehicleCountModel.find();
    return res.send(response[0]);
  } catch (err) {
    return res.status(500).json({
      message: err.message,
    });
  }
});

module.exports = router;
