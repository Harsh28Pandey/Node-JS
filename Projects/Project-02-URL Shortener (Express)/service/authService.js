const jwt = require("jsonwebtoken")

const secret = process.env.JWT_SECRET || "Harsh#$@123@#$"

const setUser = (user) => {
    return jwt.sign({
        _id: user._id,
        email: user.email,
        role: user.role
    }, secret, {
        expiresIn: "1h",   // VERY important
    })
}

const getUser = (token) => {
    try {
        if (!token) return null
        return jwt.verify(token, secret)
    } catch (error) {
        return null   // prevents server crash
    }
}

module.exports = {
    setUser,
    getUser
}