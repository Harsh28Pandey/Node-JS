const User = require("../models/user")

async function handleGetAllUsers(req, res) {
    const users = await User.find()
    return res.status(200).json(users)
}

async function handleGetUserById(req, res) {
    const user = await User.findById(req.params.id)
    if (!user) return res.status(404).json({ message: "User not found" })
    return res.status(200).json(user)
}

async function handleUpdateUserById(req, res) {
    const user = await User.findByIdAndUpdate(req.params.id, { lastName: "Changed" })
    return res.json({ message: "Success" })
}

async function handleDeleteUserById(req, res) {
    const user = await User.findByIdAndDelete(req.params.id)
    return res.json({ message: "success" })
}

async function handleCreateNewUser(req, res) {
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
    
    return res.status(201).json({ message: "Success", id: result._id })
}

module.exports = {
    handleGetAllUsers,
    handleGetUserById,
    handleUpdateUserById,
    handleDeleteUserById,
    handleCreateNewUser
}