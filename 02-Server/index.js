const http = require("http")
const fs = require("fs")
const url = require("url")

//? creating a own http server
// const myServer = http.createServer((req, res) => {
//     if (req.url === "/favicon.ico") return res.end()
//     const log = `${Date.now()}: ${req.url} New Request Received\n`
//     fs.appendFile("log.txt", log, (err, data) => {
//         switch (req.url) {
//             case "/": res.end("Homepage")
//                 break;
//             case "/about": res.end("About Page")
//                 break;
//             default: res.end("404 Nor found")
//         }
//     })
// })

//? creating a http server with url module
const myServer = http.createServer((req, res) => {
    if (req.url === "/favicon.ico") return res.end()
    const log = `${Date.now()}: ${req.url} New Request Received\n`
    const myUrl = url.parse(req.url, true)
    console.log(myUrl)
    fs.appendFile("log.txt", log, (err, data) => {
        switch (myUrl.pathname) {
            case "/":
                res.end("Homepage")
                break;
            case "/about":
                const username = myUrl.query.myname
                res.end(`Hi, ${username}`)
                // res.end("I am here")
                break;
            case "/search":
                const search = myUrl.query.search_query
                res.end("Here are your results for " + search)
                break;
            default:
                res.end("404 Nor found")
        }
    })
})

myServer.listen(8000, () => console.log("Server Started!"))