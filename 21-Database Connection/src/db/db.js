const mongoose = require("mongoose")

const connectDB = async () => {
    await mongoose.connect("mongodb+srv://backend:ASkZkAzNUodqauFj@backend.5yxdixa.mongodb.net/halley")
    console.log("Connected to Database")
}

module.exports = connectDB