import express from "express"

const app = express()
const PORT = 8000

// middleware
app.use(express.json()) // parse the json body

//? GET API
// app.get("/", (req, res) => {
//     res.send("Hello Home page from express")
// })

// app.get("/about", (req, res) => {
//     res.send("Hello About page from express")
// })

// app.get("/search", (req, res) => {
//     const { item } = req.query;
//     res.send(`You searched for: ${item}`)
// })

//? POST API
// app.post("/users", (req, res) => {
//     const { name, email } = req.body
//     res.send(`User ${name} with email ${email} has been created`)
// })

let users = [
    { id: 1, name: "Mohit", age: 24 },
    { id: 2, name: "John", age: 30 },
    { id: 3, name: "Jane", age: 28 }
]

//? GET API
app.get("/users", (req, res) => {
    res.json(users)
})

//? POST API
app.post("/users", (req, res) => {
    const newUser = { id: Date.now(), ...req.body }
    users.push(newUser)
    res.status(201).json(newUser)
})

//? PUT API
app.put("/users/:id", (req, res) => {
    const userId = parseInt(req.params.id)
    const index = users.findIndex(user => user.id === userId)

    if (index === -1) {
        return res.status(404).json({ message: "User not found" })
    }

    users[index] = { id: userId, ...req.body }
    res.json(users[index])
})

//? PATCH API
app.patch("/users/:id", (req, res) => {
    const userId = parseInt(req.params.id)
    const index = users.findIndex(user => user.id === userId)

    if (index === -1) {
        return res.status(404).json({ message: "User not found" })
    }

    users[index] = { ...users[index], ...req.body }
    res.json(users[index])
})

//? DELETE API
app.delete("/users/:id", (req, res) => {
    const userId = parseInt(req.params.id)
    const index = users.findIndex(user => user.id === userId)

    if (index === -1) {
        return res.status(404).json({ message: "User not found" })
    }

    users.splice(index, 1)
    res.json({ message: "User deleted successfully" })
})

app.listen(PORT, () => {
    console.log(`Server is running on http:localhost:${PORT}`)
})