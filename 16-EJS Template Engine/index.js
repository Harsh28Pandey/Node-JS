//? EJS {Embedded Javascript} - EJS ke javascript ka template engine hai joo dynamic data ke sath work hota hai means agar kisi ko frontend nhi aata hai too voo EJS template ka use karke javascript ko likh sakta hai.

import express from "express"

const app = express()
const PORT = 8000

//? set EJS as templating engine
app.set("view engine", "ejs")

//? define a simple route
// app.get("/", (req, res) => {
//     res.render('index', { title: "Home page", message: "Welcome to the home page." })
// })

//? define dynamic route
app.get('/user/:username', (req, res) => {
    const username = req.params.username;
    res.render('index', { title: "User Page", message: `Welcome to the user page ${username}` })
})

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})