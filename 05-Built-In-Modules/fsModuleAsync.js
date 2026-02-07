const fs = require("fs").promises
// const fs = require("fs/promises")

// write or create a file
async function writeFileExample() {
    try {
        await fs.writeFile("text.txt", "Hello from NodeJS")
        console.log("File written successfully")
    } catch (err) {
        console.error("Error writing file:", err)
    }
}
writeFileExample()

// read a file
async function readFileExample() {
    try {
        const data = await fs.readFile("text.txt", "utf8")
        console.log("File Content: ", data)
    } catch (err) {
        console.error("Error writing file: ", err)
    }
}
readFileExample()

// append to a file
async function appendFileExample() {
    try {
        await fs.appendFile("text.txt", "\nAppended Content")
        console.log("File appended successfully")
    } catch (err) {
        console.error("Error appending file: ", err)
    }
}
appendFileExample()

// delete a file
async function deleteFileExample() {
    try {
        await fs.unlink("example.txt")
        console.log("File deleted successfully")
    } catch (err) {
        console.error("Error deleting file: ", err)
    }
}
deleteFileExample()