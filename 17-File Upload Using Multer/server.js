import express from "express"
import multer from "multer"
import path from "path"
import fs from "fs"

const app = express()
const PORT = 8000

//? step 1: store configuration
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
        const uniqueName = Date.now() + path.extname(file.originalname)
        cb(null, uniqueName)
    }
})

//? step 2: upload middleware
const upload = multer({ storage: storage })

//? step 3: create upload folder if nt exists
if (!fs.existsSync('uploads')) {
    fs.mkdirSync('uploads')
}

//? step 4: create route to handle file upload
app.get("/", (req, res) => {
    res.send(`
        <h1>File Upload</h1>
        <form action="/upload" method="POST" enctype="multipart/form-data">
            <input type="file" name="myfile" />
            <button type="submit">Upload File</button>
        </form>
        `)
})

//? step 5: file upload endpoint
app.post("/upload", upload.single('myfile'), (req, res) => {
    console.log(req.file)
    res.send("File uploaded successfully" + req.file.filename)
})

//? step 6: start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})