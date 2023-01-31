const router = require('express').Router()
const vehicleCountModel = require('../model/vehicleCountModel')


router.get("/:id", async (req, res) => {
    const id = req.params.id
    try {
      const response = await vehicleCountModel.find();
      return res.send(response[response.length - 1].timerList[id]);
    } catch (err) {
      return res.status(500).json({
        message: err.message,
      });
    }
  });

module.exports = router