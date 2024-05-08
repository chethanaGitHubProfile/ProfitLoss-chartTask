const mongoose = require("mongoose");

const stockDataSchema = new mongoose.Schema({
  tickerValue: Number,
  time: { type: Date, default: Date.now },
  profitLoss: Number,
});

const StockData = mongoose.model("StockData", stockDataSchema);

module.exports = StockData;
