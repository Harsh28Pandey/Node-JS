import path from 'path'
import express from 'express'

const app = express()
const PORT = 8001

app.get('/', (req, res) => {
    console.log(path.resolve('index.html'))
    const filePath = path.resolve('index.html')
    res.sendFile(filePath)
})

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})