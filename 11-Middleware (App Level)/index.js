//? Middleware - middleware ek aisa function hota hai jo request (req) aur response (res) ke beech me run hota hai. ye har incoming request par execute hota hai, aur request/response object ko access,modify,ya process kar sakta hai.methods like app.use() or app.METHOD()

//? App-Level middleware - apply logic to the whole app or specific paths: logging,authentication,headers etc.

//todo Example - Shown below

import express from "express";

const app = express()
const PORT = 8000;

//? middleware
// const logged = (req, res, next) => {
//     console.log(`[${new Date().toLocaleDateString()}] ${req.method} ${req.url}`)
//     next()
// }
// app.use(logged) //todo aise bhi ham run karva sakte hai ye bhi chalega

app.use((req, res, next) => {
    console.log(`[${new Date().toLocaleDateString()}] ${req.method} ${req.url}`)
    next()
})

//? middleware run only on specified path
app.use("/admin", (req, res, next) => {
    console.log("Admin Section Accessed")
    next()
})

// home route
app.get("/", (req, res) => {
    res.send("<h1>Home Page</h1>")
})

// about route
app.get("/about", (req, res) => {
    res.send("<h1>About Page</h1>")
})

// admin route
app.get("/admin/dashboard", (req, res) => {
    res.send("<h1>Admin Dashboard</h1>")
})

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})