const express = require("express")
const connectDB = require("./config/db")
const logReqRes = require("./middlewares/fileMiddleware")

const app = express()
const PORT = 8000

const userRouter = require("./routes/userRoute")

// database
connectDB("mongodb://127.0.0.1:27017/job").then(() => console.log("MongoDB Connected"))

// middleware - plugin
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(logReqRes("log.txt"))

// routes
app.use("/api/users", userRouter)

app.listen(PORT, () => console.log(`Server started at Port: ${PORT}`))