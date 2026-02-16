import express from 'express'

const app = express()
const PORT = 8000

app.use('/', (req, res) => {
    res.send("<h1>Welcome to the home page</h1>")
})

app.use('/login', (req, res) => {

})

app.use('/submit', (req, res) => {
    res.send("<h1>Submit page</h1>")
})

app.listen(PORT, () => {
    console.log(`Server is running on Port: https://localhost:${PORT}`)
})
