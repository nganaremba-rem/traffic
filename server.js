const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
if (process.env.NODE_ENV !== "production") require("dotenv").config();

port = process.env.PORT || 3000;
// ? Middlewares
app.use(express.json()); // to parse json into req.body
app.use(express.urlencoded({ extended: false })); // ! (not needed) just in case
app.use(cors());

// ? MongoDB setup
mongoose.set("strictQuery", false);
mongoose.connect(process.env.MONGO_CONNECT_SECRET, () => {
  console.log("MongoDB Connected");
});

// ? import routes
const updateVehicles = require("./routes/updateVehicles.routes");
const getVehiclesCount = require("./routes/getVehiclesCount.routes");

// ? Routes
app.get('/', (req,res) => {
  res.send("Traffic backend working")
})
app.use("/updateVehiclesCount", updateVehicles);
app.use("/getVehiclesCount", getVehiclesCount);

app.listen(port, () => console.log("Server started at port " + port));
