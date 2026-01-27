const express = require("express")
const mongoose = require("mongoose")

const app = express()

//? connection with mongodb
mongoose.connect("mongodb://127.0.0.1:27017/job")
    .then(() => console.log("MongoDB Connected"))
    .catch((error) => console.log("MongoDB Error: ", error))

//? creating a user schema
const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    gender: {
        type: String,
    },
    jobTitle: {
        type: String
    }
}, { timestamps: true })

const User = mongoose.model("user", userSchema)


// middleware - plugin
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// REST API
app.get("/api/users", async (req, res) => {
    const users = await User.find()
    res.status(200).json(users)
})

app.route("/api/users/:id")
    .get(async (req, res) => {
        const user = await User.findById(req.params.id)
        if (!user) return res.status(404).json({ message: "User not found" })
        return res.status(200).json(user)
    })
    .patch(async (req, res) => {
        const user = await User.findByIdAndUpdate(req.params.id, { lastName: "Changed" })
        return res.json({ message: "Success" })
    })
    .delete(async (req, res) => {
        const user = await User.findByIdAndDelete(req.params.id)
        return res.json({ message: "success" })
    })

app.post("/api/users", async (req, res) => {
    const body = req.body
    if (!body.firstName || !body.email || !body.gender || !body.jobTitle) {
        return res.status(400).json({ message: "All required fields are mandatory" })
    }

    const result = await User.create({
        firstName: body.firstName,
        lastName: body.lastName,
        email: body.email,
        gender: body.gender,
        jobTitle: body.jobTitle
    })

    console.log("Result: ", result)
    return res.status(201).json({ message: "Success" })
})


const PORT = 8000
app.listen(PORT, () => console.log(`Server started at Port: ${PORT}`))