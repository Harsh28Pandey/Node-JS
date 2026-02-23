//? MVC - Modal View Controller

import express from "express"
import homeRoutes from "./routes/homeRoutes.js"
import { PORT, viewEngine } from "./configs/appConfig.js"

const app = express()
// const PORT = 8000

// app.set("view engine", "ejs")
app.set('view engine', viewEngine)

app.use("/", homeRoutes)

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})