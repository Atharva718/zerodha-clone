const mongoose = require("mongoose");
const { OrdersSchema } = require("../schemas/OrdersSchema");

const OrdersModel = mongoose.model("order", OrdersSchema); // ✅ Corrected

module.exports = { OrdersModel };
