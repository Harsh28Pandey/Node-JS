//? file operations in node js

const fs = require("fs")

//? create and write into a file
//* synchronously
fs.writeFileSync("./test.txt", "Hello There")

//* asynchronously
// fs.writeFile("./test.txt", "Hello There Async", (err) => { })

//? reading a file
//* syncchronously
const result = fs.readFileSync("./contact.txt", "utf-8")
console.log(result)

//* asynchronously
// fs.readFile("./contact.txt", "utf-8", (err, result) => {
//     if (err) {
//         console.log("Error:", err)
//     } else {
//         console.log(result)
//     }
// })

//? adding content into a file
//* synchronously
fs.appendFileSync("./test.txt", "Hello i am available")
fs.appendFileSync("./test.txt", `\n ${Date.now()} Hello Everyone`)

//* asynchronously
// fs.appendFile("./test.txt", "Hello i am available async", (err => { }))

//? copy a file
//* synchronously
fs.cpSync("./test.txt", "copy.txt")

//* asynchronously
// fs.cp("./test.txt", "copy1.txt", (err) => { })

//? deleting a file
//* synchronously
fs.unlinkSync("copy.txt")

//* asynchronously
// fs.unlink("copy1.txt", (err) => { })

//? creating a directory (folder)
//* synchronously
fs.mkdirSync("my-docs")
fs.mkdirSync("mydocs/a/b", { recursive: true })

//* asynchronously
// fs.mkdir("my-docss", (err) => { })