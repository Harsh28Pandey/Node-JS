//? server ko create karna 

const express = require('express');

const app = express()

//? middleware to parse json data from request body
app.use(express.json())

const notes = []

//? create a note
app.post("/notes", (req, res) => {
    // console.log(req.body)
    notes.push(req.body)
    res.status(201).json({
        message: "Note created successfully",
        success: true
    })
})

//? get all notes
app.get("/notes", (req, res) => {
    res.status(200).json({
        message: "All notes fetched successfully",
        notes: notes,
        success: true
    })
})

//? delete a note
app.delete("/notes/:id", (req, res) => {
    const id = req.params.id
    delete notes[id]
    res.status(200).json({
        message: "Note deleted successfully",
        success: true
    })
})

//? update a note
app.patch("/notes/:id", (req, res) => {
    const id = req.params.id
    const description = req.body.description
    notes[id].description = description
    res.status(200).json({
        message: "Note updated successfully"
    })
})

module.exports = app


/*
    todo: Sample note object
    note = {
        title: 'Task name',
        description: 'Task description'
    }
*/