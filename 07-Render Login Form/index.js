import express from 'express'

const app = express()
const PORT = 8000

app.use('/', (req, res) => {

})

app.use('/login', (req, res) => {

})

app.use('/submit', (req, res) => {

})

app.listen(PORT, () => {
    console.log(`Server is running on Port: https://localhost:${PORT}`)
})