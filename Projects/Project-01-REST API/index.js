const express = require("express")
const users = require("./MOCK_DATA.json")
const fs = require("fs")

const app = express()

//? similar works karega jaisa niche wala get, patch aur delete wale routes karenge
// app.route("/api/users/:id")
//     .get((req, res) => {
//         const id = req.params.id;
//         const user = users.map((user) => user.id === id)
//         return res.json(user)
//     })
//     .patch((req, res) => {
//         return res.json({ status: "pending" })
//     })
//     .delete((req, res) => {
//         return res.json({ status: "pending" })
//     })


// middleware - plugin
app.use(express.urlencoded({ extended: false }))

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

app.patch("/api/users/:id", (req, res) => {
    // TODO: edit the user with id
    return res.json({ status: "pending" })
})

app.delete("/api/users/:id", (req, res) => {
    // TODO: delete the user with id
    return res.json({ status: "pending" })
})

const PORT = 8000
app.listen(PORT, () => console.log(`Server started at Port: ${PORT}`))