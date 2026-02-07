const fs = require("fs").promises
// const fs = require("fs/promises")

// write a file
fs.writeFile("data.txt", "Hello from NodeJS")
    .then(() => {
        console.log("File written successfully")
    })
    .catch((err) => {
        console.error("Error writing file:", err)
    })

// read a file
fs.readFile("data.txt", "utf-8")
    .then((data) => {
        console.log("File content: ", data)
    })
    .catch((err) => {
        console.error("Error reading file:", err)
    })

// append to a file
fs.appendFile("data.txt", "\nAppended Content")
    .then(() => {
        console.log("File appended successfully")
    })
    .catch((err) => {
        console.error("Error appending file:", err)
    })

// delete a file
fs.unlink("data.txt")
    .then(() => {
        console.log("File deleted successfully")
    })
    .catch((err) => {
        console.error("Error deleting file:", err)
    })