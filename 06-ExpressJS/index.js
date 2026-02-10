import express from "express"
import { add, subtract } from "./math.js"

const app = express()

// home route
app.get('/', (req, res) => {
    res.send("Welcome to home page")
    console.log(add(8, 8))
    console.log(subtract(10, 6))
})

// about route
app.get('/about', (req, res) => {
    res.send("<h1>Welcome to about page</h1>")
})

// profile page
app.get('/profile', (req, res) => {
    res.send("Welcome to profile page")
})

const PORT = 8000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})