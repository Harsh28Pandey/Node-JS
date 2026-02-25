import express from "express"
import fetch from "node-fetch"

const app = express()
const PORT = 8000

app.set("view engine", "ejs")

app.get("/posts", async (req, res) => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts")
        const data = await response.json()
        res.render("posts", { posts: data })
        // console.log(posts)
    } catch (error) {
        res.status(500).send("Something went wrong")
    }
})

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})