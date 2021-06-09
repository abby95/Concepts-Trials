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

        // resolve()
        reject("Error")
    })
}

createPost().then(getPosts).catch(err => console.log(err))