const { model } = require("mongoose");
const { HoldingsSchema } = require("../schemas/HoldingsSchema"); // ✅ Fix duplicate

const HoldingsModel = model("holding", HoldingsSchema); // ✅ Correct model creation

module.exports = { HoldingsModel }; // ✅ Export the correct model
