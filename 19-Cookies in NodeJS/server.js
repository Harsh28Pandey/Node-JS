import express from "express"
import cookieParser from "cookie-parser"

const app = express()
const PORT = 8000

//? middleware
app.use(cookieParser())

app.get("/", (req, res) => {
    res.send("Hello Cookies in NodeJS")
})

//? set a cookie
app.get("/setCookie", (req, res) => {
    res.cookie("username", "John Doe", {
        maxAge: 1000 * 60 * 2, //? 2 minutes
        httpOnly: true, //? only accessible by the server
        sameSite: "strict", //? only sent for same site requests
    })
    res.send("Cookie set")
})

//? get a cookie
app.get("/getCookie", (req, res) => {
    const username = req.cookies.username
    res.send(`Username: ${username}` || "No cookie found")
})

//? clear a cookie
app.get("/clearCookie", (req, res) => {
    res.clearCookie("username")
    res.send("Cookie cleared")
})

app.listen((PORT), () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})