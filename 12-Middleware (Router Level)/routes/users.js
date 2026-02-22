import express from "express"

const app = express.Router()

app.use((req, res, next) => {
    console.log("Requested Type: ", req.method)
    next()
})

app.get("/", (req, res) => {
    res.send("<h1>Hello, Users</h1>");
})

app.get("/profile", (req, res) => {
    res.send("<h1>Users Profile</h1>")
})

export default app;