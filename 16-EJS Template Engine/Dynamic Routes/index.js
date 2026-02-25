//? dynamic routes + conditions

import express from "express"

const app = express()
const PORT = 8000

app.set('view engine', 'ejs')

//? dummy data
const users = [
    { name: "Mohit", id: 1, role: "Admin" },
    { name: "Harsh", id: 2, role: "Editor" },
    { name: "Arjun", id: 3, rolw: "Viewer" }
]

//? dynamic routes
app.get("/users/:id", (req, res) => {
    const { id } = req.params
    const user = users.find(u => u.id === parseInt(id))
    if (user) {
        res.render('user', { user })
    } else {
        res.status(404).send("User not found")
    }
})

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})