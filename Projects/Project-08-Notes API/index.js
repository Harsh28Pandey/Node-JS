//? creating a notes API project with apply the CRUD(Create, Read, Update and Delete) operations without using database.

import express from "express"

const app = express()
const PORT = 8000

//? middleware
app.use(express.json())

let notes = [] //* saving data into the array

//? routes
//* get all notes
app.get("/notes", (req, res) => {
    res.json({
        success: true,
        data: notes
    })
})

//* create a new note
app.post("/notes", (req, res) => {
    const { title, content } = req.body
    const newNote = {
        id: notes.length + 1,
        title,
        content
    }
    notes.push(newNote)
    res.status(201).json({
        success: true,
        message: "Notes created successfully",
        data: newNote
    })
})

//* get a single notes by id
app.get("/notes/:id", (req, res) => {
    const note = notes.find((n) => n.id === parseInt(req.params.id))
    if (!note) {
        return res.status(404).json({
            success: false,
            message: "Note not found"
        })
    }
    res.json({
        success: true,
        data: note
    })
})

//* update a note
app.put("/notes/:id", (req, res) => {
    const note = notes.find((n) => n.id === parseInt(req.params.id))
    if (!note) {
        return res.status(404).json({
            success: false,
            message: "Note not found"
        })
    }
    const { title, content } = req.body
    note.title = title || note.title
    note.content = content || note.content
    res.status(200).json({
        success: true,
        message: "Note updated successfully",
        data: note
    })
})

//* delete a note
app.delete("/notes/:id", (req, res) => {
    const noteIndex = notes.find((n) => n.id === parseInt(req.params.id))
    if (noteIndex === -1) {
        return res.status(404).json({
            success: false,
            message: "Note not found"
        })
    }
    const deleteNote = notes.splice(noteIndex, 1)
    res.status(200).json({
        success: true,
        message: "Note deleted successfully",
        data: deleteNote
    })
})

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})