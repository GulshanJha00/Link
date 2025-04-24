const mongoose = require("mongoose")


const schema = new mongoose.Schema({
    url:{
        type: String,
        required: true
    },
    code: {
        type: String,
        required: true
      },
    createdAt: {
        type: Date,
        default: Date.now,
        expires: 86400
    }
})

module.exports = mongoose.model("Snippet", schema);
