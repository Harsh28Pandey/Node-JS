import http from 'http'
import fs from 'fs'
import { v4 as uuidv4 } from 'uuid'

// console.log(uuidv4())

const PORT = 3000

let urls = {}

// function to save urls to a file
const saveUrl = () => {
    fs.writeFileSync('urls.json', JSON.stringify(urls, null, 2))
}

const server = http.createServer((req, res) => {
    if (req.method === 'POST' && req.url === '/shorten') {
        let body = ''
        req.on('data', (chunk) => {
            body += chunk.toString()
        })
        req.on('end', () => {
            try {
                const { originalUrl } = JSON.parse(body)
                if (!originalUrl) {
                    res.writeHead(400, { "Content-Type": "application/json" })
                    res.end(JSON.stringify({ error: "originalUrl is required" }))
                    return;
                }

                const shortId = uuidv4().slice(0, 6)
                urls[shortId] = originalUrl
                saveUrl()
                res.writeHead(201, { "Content-Type": "application/json" })
                res.end(JSON.stringify({ shortUrl: `http://localhost:${PORT}/${shortId}` }))

            } catch (error) {
                res.writeHead(500, { "Content-Type": "application/json" })
                res.end(JSON.stringify({ error: "Internal Server Error" }))
            }
        })
    } else if (req.method === "GET") {
        const shortId = req.url.slice(1); // remove leading '/'
        if (urls[shortId]) {
            res.writeHead(302, { Location: urls[shortId] })
            res.end()
        } else {
            res.writeHead(404, { "Content-Type": "application/json" })
            res.end(JSON.stringify({ error: "URL Not found" }))
        }
    } else {
        res.writeHead(404, { "Content-Type": "application/json" })
        res.end(JSON.stringify({ error: "Not found" }))
    }
})

server.listen(PORT, () => {
    console.log(`Server is running on Port: http://localhost:3000`)
})