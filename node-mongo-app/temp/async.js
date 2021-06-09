const { get } = require("../routes/posts")

var posts = [
    { title: "post one", body: "body one" },
    { title: "post two", body: "body two" },

]


function getPosts() {
    console.log(posts)
}

function createPost() {
    return new Promise((resolve, reject) => {
        posts.push({ title: "post three", body: "body 3" })

        resolve()
        // reject("Error")
    })
}

async function init() {
    await createPost()
    getPosts()
}

init()