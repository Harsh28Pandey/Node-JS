//? Third-party middleware - add external features such as security, rate limiting, logging, CORS handling etc. methods like app.use() {after `npm install <package>`} adds a extra features: logging, security, CORS, rate- limiting example - morgan & cors.

//? CORS - cors origin resources error
//todo Example - Shown Below

import express from "express"
import morgan from "morgan"
import cors from "cors"
import rateLimit from "express-rate-limit"

const app = express()
const PORT = 8000

//? middleware
// app.use(morgan("dev")) //* morgan ka kaam hota hai http ki request ko log karvana terminal par ya console pe
app.use(cors()) //* cors permission deti hai ki koi bhi application isse use kar sakti hai

//* express-rate-limit hame ddos attack se bachane ke liye use hota hai
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, //* 15 minutes
    max: 5, //* limit each IP to 50 requests per windowMs
    message: "Too many requests from this IP, please try again after 15 minutes",
    standardHeaders: true, //* Return rate limit info in the `RateLimit-*` headers
    legacyHeaders: false, //* Disable the `X-RateLimit-*` headers
})
app.use("/", limiter) //* apply rate limiting to all requests under / (home route)

//? routes
app.get("/", (req, res) => {
    res.send("Hello 3rd party midddleware")
})

app.get("/api/data", (req, res) => {
    res.json({ message: "Sample API response" })
})

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})