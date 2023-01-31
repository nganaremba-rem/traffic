const vehicleCountModel = require("../model/vehicleCountModel");
const router = require("express").Router();

const ids = {
  0: "light_1",
  1: "light_2",
  2: "light_3",
  3: "light_4"
}

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

router.get("/:id", async (req, res) => {
  const id = req.params.id
  try {
    const response = await vehicleCountModel.find();
    return res.send(response[response.length - 1][ids[parseInt(id)]]);
  } catch (err) {
    return res.status(500).json({
      message: err.message,
    });
  }
});

// router.get("/current", async (req, res) => {
//   try {
//     const response = await vehicleCountModel.find();
//     return res.send(response[response.length - 1]);
//   } catch (err) {
//     return res.status(500).json({
//       message: err.message,
//     });
//   }
// });


module.exports = router;
