const express = require("express")

const app = express()
const PORT = 3000

app.get("/", (req, res) => {
    res.send("Hello world")
})

app.get("/about", (req, res) => {
    res.send("About page")
})

app.listen(PORT, () => {
    console.log("Server is running on port 3000")
})