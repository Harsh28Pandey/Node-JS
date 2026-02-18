import express from "express"
import path from "path"

const app = express()
const PORT = 8000

const filePath = path.resolve()

// middleware
app.use(express.static('public'))

app.get("/", (req, res) => {
    res.sendFile(filePath + '/index.html')
})

app.get("/about", (req, res) => {
    res.send('<h1>About Page</h1><p>This is the about page</p>')
})

app.use((req, res) => {
    res.status(404).sendFile(filePath + '/pages/404.html')
})

app.listen(PORT, () => {
    console.log(`Server is running on Port: ${PORT}`)
})