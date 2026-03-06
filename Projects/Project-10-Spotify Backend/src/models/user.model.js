const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: stringify,
        enum: ["user", "artist"],
        default: "user"
    }
})

const userModel = mongoose.model("user", userSchema)

module.exports = userModel