const express = require("express")
const connectDB = require("./config/db")
const url = require("./models/url")
const path = require("path")
const cookieParser = require("cookie-parser")
const { checkForAuthentication, restrictTo } = require("./middlewares/authMiddleware")

const urlRoute = require("./routes/urlRoute")
const staticRoute = require("./routes/staticRouter")
const userRoute = require("./routes/userRoute")

const app = express()
const PORT = 8001

app.set("view engine", "ejs")
app.set("views", path.resolve("./views"))

// database
connectDB("mongodb://127.0.0.1:27017/short-url")
    .then(() => console.log("MongoDb Connected"))

// middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(checkForAuthentication)

// routes
app.use("/url", restrictTo(["NORMAL", "ADMIN"]), urlRoute)
app.use("/user", userRoute)
app.use("/", staticRoute)

app.get("/:shortId", async (req, res) => {
    const shortId = req.params.shortId
    const entry = await url.findOneAndUpdate(
        { shortId },
        { $push: { visitHistory: { timestamp: Date.now() } } }
    )
    res.redirect(entry.redirectUrl)
})

app.listen(PORT, () => console.log(`Server Running on Port: ${PORT}`))