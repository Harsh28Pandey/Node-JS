import express from "express";
import session from "express-session";

const app = express();
const PORT = 8000;

app.use(session({
    secret: "mysecretkey",
    resave: false, //? session ko har request pe save nahi karna hai jab tak ki usme koi change na ho (unchanges session dobara save nhi hoga)
    saveUninitialized: true, //? empty sessions bhi bana sakte hoo
    cookie: {
        maxAge: 1000 * 60 * 60, //? session ki expiry time set kar sakte hoo (1 hour)
        httpOnly: true, //? client side se cookie access nahi kar sakte hoo (security ke liye)
    },
}))

app.get("/", (req, res) => {
    res.send("Welcome to the session demo!");
})

//? create a session 
app.get("/login", (req, res) => {
    req.session.user = "Harsh"
    res.send("Session created for user Harsh");
})

//? protecting a route using session
app.get("/protected", (req, res) => {
    if (req.session.user) {
        res.send(`Welcome ${req.session.user}, you have access to this protected route!`);
    } else {
        res.send("You do not have access to this protected route!");
    }
})

//? destroying a session
app.get("/logout", (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            console.log(err);
            res.send("Error logging out");
        } else {
            res.send("Session destroyed, you have been logged out!");
        }
    })
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});