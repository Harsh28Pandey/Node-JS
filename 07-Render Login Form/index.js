import express from 'express'
import login from './pages/login.js'
import submit from './pages/submit.js'
import home from './pages/home.js'

const app = express()
const PORT = 8000

app.get('/', (req, res) => {
    res.send(home())
})

app.get('/login', (req, res) => {
    res.send(login())
})

app.post('/submit', (req, res) => {
    res.send(submit())
})

app.listen(PORT, () => {
    console.log(`Server is running on Port: https://localhost:${PORT}`)
})