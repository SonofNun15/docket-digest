const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DocketListSchema = new Schema({
  docket_identifier: {
    type: String,
    unique: true,
    required: true,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
});

const DocketList = mongoose.model("DocketList", DocketListSchema);

module.exports = DocketList;
