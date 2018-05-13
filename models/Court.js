const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CourtSchema = new Schema({
  identifier: {
    type: String,
    // unique: true,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  docket_identifiers: [
    {
      type: String,
    }
  ],
  created_at: {
    type: Date,
    default: Date.now,
  },
  updated_at: {
    type: Date,
    default: Date.now,
  },
});

const Court = mongoose.model("Court", CourtSchema);

module.exports = Court;
