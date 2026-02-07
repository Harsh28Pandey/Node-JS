const os = require('os')
const fs = require("fs")

console.log(os.type())
console.log(os.platform())
console.log(os.arch())
console.log(os.hostname())
console.log(os.release())
console.log(os.uptime())
console.log(os.userInfo())
console.log(os.totalmem())
console.log(os.freemem())
console.log(os.cpus())

// create a folder or remove a folder
fs.mkdirSync('newFolder')
fs.rmdirSync('newFolder')


// check file exists or not
if (fs.existsSync('data.txt')) {
    console.log("File exists, proceeding with operations")
} else {
    console.log("File not found")
}