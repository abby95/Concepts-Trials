const express = require("express")

const router = express.Router();

// Importing PostSchema
const Post = require("../models/Post")

router.get("/", (req, res) => {
    res.send("In Posts Index Route")
})


router.post("/", (req, res) => {
    // console.log(req.body);

    const post = new Post({
        title: req.body.title,
        description: req.body.description
    })

    console.log(post)

    post.save()
        .then(data => {
            console.log(data)
            res.status(200).json({
                data: data
            })
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({
                message: "There was problem saving your post",
                error: err
            })
        })


})


module.exports = router