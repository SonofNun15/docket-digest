const mongoose = require("mongoose");
// Save a reference to the Schema constructor
const Schema = mongoose.Schema;


const FilingSchema = new Schema({

    document_url: {
        type: String
    },

    description: {
        type: String,
        required: true
    },

    created_at: {
        type: Date,
        default:Date.now
    },

    published_at : {
        type: Date,
        required: true
    }

});

// This creates our model from the above schema, using mongoose's model method
const Filing = mongoose.model("Filing", FilingSchema);

// Export the User model
module.exports = Filing;
