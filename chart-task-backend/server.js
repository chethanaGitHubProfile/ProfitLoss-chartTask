const express = require("express");
const cors = require("cors");
const app = express();
const port = 5000;

const ConfigureDB = require("./app/config/db");
ConfigureDB();
const stockController = require("./app/controllers/StockData-controller");

app.use(cors());
app.use(express.json());

app.post("/up", stockController.handleUpButtonClick);
app.post("/down", stockController.handleDownButtonClick);

app.listen(port, () => {
  console.log("successfully connected to port", port);
});
