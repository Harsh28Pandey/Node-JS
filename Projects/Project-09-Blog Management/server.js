import express from "express"
import bodyParser from "body-parser"

const app = express()
const PORT = 8000

//? middleware
app.set("view engine", "ejs")
app.use(express.static("public"))
app.use(bodyParser.urlencoded({ extended: true }))

//? dummy data
let blogs = [
    { id: 1, title: "This is a first blog", content: "This is the content of the first blog", author: "Admin" },
    { id: 2, title: "This is a second blog", content: "This is the content of the second blog", author: "User" },
    { id: 3, title: "This is a third blog", content: "This is the content of the third blog", author: "Admin" },
]

//? routes
app.get('/', (req, res) => {
    res.render('home', { title: "Home Blog" })
})

app.get("/blogs", (req, res) => {
    res.render("blogs", { blogs })
})

app.get("/blogs/:id", (req, res) => {
    const blog = blogs.find((b) => b.id == parseInt(req.params.id))
    if (!blog) {
        res.status(404).send("Blog not found")
    } else {
        res.render("blogDetails", { blog })
    }
})

app.get("/add-blog", (req, res) => {
    res.render("addBlog")
})

app.post("/add-blog", (req, res) => {
    const { title, content, author } = req.body
    blogs.push({ id: blogs.length + 1, title, content, author })
    res.redirect('/blogs')
})

//? delete blog (admin only)
app.get("/blogs/:id", (req, res) => {
    blogs = blogs.filter((b) => b.id != parseInt(req.params.id))
    res.redirect('/blogs')
})

//? 404 page
app.use((req, res) => {
    res.status(404).render('error', { message: '404 - Page Not Found' })
})

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})