const express = require("express")
const valdationRules = require("./middlewares/validation.middleware.js")

const app = express()
app.use(express.json())

// app.get("/", (req, res) => {
//     res.status(200).json({
//         message: "Hello World"
//     })
// })

app.post("/register", valdationRules.registerUserValidationRules, (req, res) => {
    const { username, email, password } = req.body
    return res.status(201).json({
        message: "User registered successfully",
        user: {
            username,
            email,
            password
        }
    })
})

module.exports = app