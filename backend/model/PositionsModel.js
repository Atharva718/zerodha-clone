const { model } = require("mongoose");
const { PositionsSchema } = require("../schemas/PositionsSchema"); // ✅ Import Schema

const PositionsModel = model("position", PositionsSchema); // ✅ Correct Model Creation

module.exports = { PositionsModel }; // ✅ Export Correctly
