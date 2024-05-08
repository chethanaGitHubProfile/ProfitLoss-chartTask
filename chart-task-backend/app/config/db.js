const mongoose = require("mongoose");
const ConfigureDB = async () => {
  try {
    const db = await mongoose.connect("mongodb://127.0.0.1:27017/stock_data");
    console.log("connected to DB");
  } catch (err) {
    console.log("error in connected to DB");
  }
};
module.exports = ConfigureDB;
