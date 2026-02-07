const path = require("path")

// console.log(__dirname)
// console.log(__filename)

const filePath = "/Users/username/Documents/project/file.txt"
console.log(path.basename(filePath))
console.log(path.extname(filePath))

const finalPath = path.join("Desktop", 'NodeJS', 'app.js')
console.log(finalPath)

console.log(path.resolve('Desktop', 'NodeJS', 'app.js'))

console.log(path.parse(finalPath))