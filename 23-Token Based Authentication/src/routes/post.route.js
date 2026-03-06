const express = require("express")
const jwt = require("jsonwebtoken")

const router = express.Router()

router.post("/create", (req, res) => {
    const token = req.cookies.token

    if (!token) {
        res.status(401).json({
            message: "Unauthorized"
        })
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        console.log(decoded)
    } catch (err) {
        return res.status(401).json({
            message: "Token is invalid"
        })
    }

    res.send("Post created successfully")
})

module.exports = router