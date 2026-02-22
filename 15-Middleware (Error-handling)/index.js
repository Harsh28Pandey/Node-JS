//? Third-party middleware - catch and process errors in one central place. must be registered after others routes. methods like app.use() with 4 parameters {err,req,res,next}. Jab koi server error aa jaye too user ek custom response bhej sakta hai. uss custom response ko hamm apne se handle kar sakte hai.

//todo Example - Shown below

import express from "express"

const app = express()
const PORT = 8000

//? routes
app.get("/", (req, res) => {
    res.send("Hello page")
})

app.get('/fail', (req, res, next) => {
    //* artificial error creation
    const err = new Error("Something went wrong")
    err.statusCode = 400 //* custom status code
    next(err) //* pass the error to the next middleware (error handler)
})

//? error handling middleware
app.use((err, req, res, next) => {
    console.log("Error caught by middleware: ", err.message)
    res.status(err.statusCode || 500).json({
        success: false,
        message: err.message || "Internal Server Error"
    })
})

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})