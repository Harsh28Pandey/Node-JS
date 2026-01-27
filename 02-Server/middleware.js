const express = require("express")
const users = require("./MOCK_DATA.json")
const fs = require("fs")

const app = express()

// middleware - plugin
app.use(express.urlencoded({ extended: false }))

app.use((req, res, next) => {
    fs.appendFile("./log.txt", `${Date.now()}: ${req.method} ${req.path}\n`, (err, data) => {
        next()
    })
})

// routes
app.get("/users", (req, res) => {
    const html = `
    <ul>
        ${users.map((user) => `<li>${user.first_name}</li>`).join("")}
    </ul>
    `
    res.send(html)
})

// REST API
app.get("/api/users", (req, res) => {
    return res.json(users)
})

app.get("/api/users/:id", (req, res) => {
    const id = Number(req.params.id);
    const user = users.find((user) => user.id === id)
    res.json(user)
})

app.post("/api/users", (req, res) => {
    // TODO: create a new user
    const body = req.body
    users.push({ ...body, id: users.length + 1 })
    fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data) => {
        return res.json({ status: "success", id: users.length })
    })
    // console.log(body) 
})

const PORT = 8000
app.listen(PORT, () => console.log(`Server started at Port: ${PORT}`))