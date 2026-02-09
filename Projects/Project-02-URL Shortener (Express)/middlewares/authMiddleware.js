const { getUser } = require("../service/authService")

// authentication
const checkForAuthentication = (req, res, next) => {
    const tokenCookie = req.cookies?.token
    req.user = null
    if (!tokenCookie) {
        return next()
    }

    const token = tokenCookie
    const user = getUser(token)

    req.user = user
    next()
}

// authorization
const restrictTo = (roles) => {
    return (req, res, next) => {
        if (!req.user) return res.redirect("/login")

        if (!roles.includes(req.user.role)) return res.end("Unauthorized")
        next()
    }
}

// const restrictToLoggedInUserOnly = async (req, res, next) => {
// console.log(req)
//     const userUid = req.headers["Authorization"]

//     if (!userUid) return res.redirect("login")
//     const token = userUid.split("Bearer ")[1]
//     const user = getUser(token)

//     if (!user) return res.redirect("login")

//     req.user = user
//     next()
// }

// const checkAuth = async (req, res, next) => {
//     const userUid = req.headers["authorization"]
//     const token = userUid.split("Bearer ")[1]
//     const user = getUser(token)
//     req.user = user
//     next()
// }

module.exports = {
    // restrictToLoggedInUserOnly,
    // checkAuth
    checkForAuthentication,
    restrictTo
}