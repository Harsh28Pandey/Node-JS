const mongoose = require("mongoose")

const postschema = new mongoose.Schema({
    image: {
        type: String
    },
    caption: {
        type: String
    }
})

const postModel = mongoose.model("post", postschema)

module.exports = postModel