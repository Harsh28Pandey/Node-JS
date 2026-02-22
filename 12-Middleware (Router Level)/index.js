//? Route-level middleware - attach middleware to a specific router module or modular route handling. methods like router.use() or router.METHOD()

//todo Example - Shown below

import express from "express"
import userRoutes from "./routes/users.js"

const app = express()
const PORT = 8000

//? middleware
// const customMiddlewareQuery = (req, res, next) => {
//     console.log("Query: ", req.query.age)
//     if (!req.query.age || req.query.age < 18) {
//         res.send("<h1>You are not allowed</h1>")
//     } else {
//         next();
//     }
// }

// const customMiddlewareURL = (req, res, next) => {
//     console.log("URL: ", req.url);
//     next();
// }

app.use((req, res, next) => {
    console.log("Requested URL: ", req.url)
    next()
})
app.use("/users", userRoutes)

//? routes
app.get("/", (req, res) => {
    res.send("<h1>Hello, Home!</h1>")
})

// app.get("/login", customMiddlewareQuery, customMiddlewareURL, (req, res) => {
//     res.send("<h1>Hello, Login!</h1>")
// })

// app.get("/users", customMiddlewareQuery, (req, res) => {
//     res.send("<h1>Hello, Users!</h1>")
// })

// app.get("/products", customMiddlewareURL, (req, res) => {
//     res.send("<h1>Hello, Products!</h1>")
// })

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})