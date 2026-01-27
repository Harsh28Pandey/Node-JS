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
    if (!user) {
        return res.status(404).json({ message: "user not found" })
    }
    res.json(user)
})

app.post("/api/users", (req, res) => {
    // TODO: create a new user
    const body = req.body;
    if (!body || !body.first_name || !body.last_name || !body.email || !body.gender || !body.job_title) {
        return res.status(400).json({ message: "Please enter all the fields" })
    }
    users.push({ ...body, id: users.length + 1 })
    fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data) => {
        return res.status(201).json({ status: "success", id: users.length })
    })
    // console.log(body) 
})

const PORT = 8000
app.listen(PORT, () => console.log(`Server started at Port: ${PORT}`))