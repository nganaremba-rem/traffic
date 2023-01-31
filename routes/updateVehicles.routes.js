const router = require("express").Router();
const vehicleCountModel = require("../model/vehicleCountModel");

router.post("/", async (req, res) => {
  try {
    console.log("Getting post");
    console.log(req.body);
    await vehicleCountModel.create(req.body);
    return res.status(201).json({ message: "Added successfully" });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
});

module.exports = router;
