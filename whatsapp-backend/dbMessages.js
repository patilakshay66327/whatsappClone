const mongoose = require("mongoose");

// definng data schema
const whatsappSchema = mongoose.Schema({
  message: String,
  name: String,
  timeStamp: String,
  received: Boolean,
});

const mogooseModel = mongoose.model("messagecontents", whatsappSchema);

module.exports = mogooseModel;
