const express = require('express')
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const app = express();

app.use(bodyParser.json())

require("dotenv/config")

// Connecting to Mongo DB
mongoose.connect(process.env.DB_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}, () => {
    console.log("Connected to Mongo DB")
})

// Importing Routes
const postsRoute = require("./routes/posts")

app.use("/posts", postsRoute)

app.get("/", (req, res) => {
    res.send("This is the home route")
})

app.listen(3000, () => {
    console.log("Server Started on PORT 3000")
})