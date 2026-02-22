//? Buile-In middleware - ready-made express helpers for common needs like parsing JSON, URL-encoded data, or static files. methods like app.use() {with the built-in function} common ones - express.json(), express.urlencoded(), express.static().

//todo Example - Shown below

import express from "express"

const app = express()
const PORT = 8000

//? middleware
app.use(express.json()) //* json ka code show hone lagta hai
app.use(express.urlencoded({ extended: true })) //* form submit karte samay ye likhna jaruri hai varna form submit nhi hoga
app.use(express.static('public')) //* agar public folder me koi file banai hai usse access karne ke liye ye likhna jaruri hai

//? routes
app.post("/api/user", (req, res) => {
    console.log("JSON body: ", req.body)
    res.json({ message: "JSON data received", data: req.body })
})

app.post("/register", (req, res) => {
    console.log("Form Body: ", req.body)
    res.send(`Thanks, ${req.body.name} ${req.body.email} for registering`)
})

app.get("/", (req, res) => {
    res.send("Hello from express server")
})

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})