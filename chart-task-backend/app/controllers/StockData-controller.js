const StockData = require("../models/StockData-model");
const stockController = {};

stockController.handleUpButtonClick = async (req, res) => {
  try {
    const newData = await StockData.create(req.body);

    // Calculate profit or loss
    const lastData = await StockData.findOne().sort({ _id: -1 });
    const profitLoss = newData.value - lastData.value;

    res.status(201).json({ newData, profitLoss });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

stockController.handleDownButtonClick = async (req, res) => {
  try {
    const newData = await StockData.create(req.body);

    // Calculate profit or loss
    const lastData = await StockData.findOne().sort({ _id: -1 });
    const profitLoss = newData.value - lastData.value;

    res.status(201).json({ newData, profitLoss });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = stockController;
