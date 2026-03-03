const express = require("express")
const noteModel = require("./models/note.model.js")

const app = express()

// middleware
app.use(express.json())

// routes
// create a note
app.post("/notes", async (req, res) => {
    const data = req.body  // {title, description}
    await noteModel.create({
        title: data.title,
        description: data.description
    })
    res.status(201).json({
        message: "Note created successfully"
    })
})

// get all notes
app.get("/notes", async (req, res) => {
    const notes = await noteModel.find()
    res.status(200).json({
        message: "Notes fetched successfully",
        notes
    })
})

// delete a note
app.delete("/notes/:id", async (req, res) => {
    const id = req.params.id
    await noteModel.findByIdAndDelete(id)
    res.status(200).json({
        message: "Note deleted successfully"
    })
})

// update a note
app.patch("/notes/:id", async (req, res) => {
    const id = req.params.id
    const data = req.body
    await noteModel.findByIdAndUpdate(id, {
        title: data.title,
        description: data.description
    })
    res.status(200).json({
        message: "Note updated successfully"
    })
})

module.exports = app