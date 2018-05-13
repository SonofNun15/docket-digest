const mongoose = require("mongoose");
// Save a reference to the Schema constructor
const Schema = mongoose.Schema;


const DocketSchema = new Schema({

    docket_number: {
        type: String,
        unique: true,
        required: true,
    },

    docket_url: {
        type: String,
        required: true,
    },

    title: {
        type: String,
        required: true,
    },

    created_at: {
        type: Date,
        default: Date.now,
    },

    updated_at: {
        type: Date,
        default: Date.now,
    },

    filings: [
        {
            type: Schema.Types.ObjectId,
            ref: "Filing"
        }
    ]

});

// This creates our model from the above schema, using mongoose's model method
const Docket = mongoose.model("Docket", DocketSchema);

// Export the User model
module.exports = Docket;
