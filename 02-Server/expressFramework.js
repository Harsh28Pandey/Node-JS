const express = require("express")

const app = express()

app.get("/", (req, res) => {
    return res.send("Hello from homepage")
})

app.get("/about", (req, res) => {
    return res.send("Hello from about page")
})

const PORT = 8000
app.listen(PORT, () => {
    console.log(`Server is running on Port: ${PORT}`)
})