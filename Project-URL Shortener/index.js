const express = require("express")
const urlRoute = require("./routes/urlRoute")
const connectDB = require("./config/db")
const url = require("./models/url")

const app = express()
const PORT = 8001

// database
connectDB("mongodb://127.0.0.1:27017/short-url")
    .then(() => console.log("MongoDb Connected"))

// middleware
app.use(express.json())

// routes
app.use("/url", urlRoute)
app.get("/:shortId", async (req, res) => {
    const shortId = req.params.shortId
    const entry = await url.findOneAndUpdate(
        { shortId },
        { $push: { visitHistory: { timestamp: Date.now() } } }
    )
    res.redirect(entry.redirectUrl)
})

app.listen(PORT, () => console.log(`Server Running on Port: ${PORT}`))