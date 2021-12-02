const http = require("http")
const fs = require("fs").promises;
const path = require("path")

// console.log(__dirname)
// SERVING HTML FILE
const requestListener = (req, res) => {
    fs.readFile(path.join(__dirname,"/public/index.html"))
        .then(contents => {
            res.write(contents)
            res.end()
        })
        .catch(err => console.log(err))
}

const server = http.createServer(requestListener)

// SERVING STATIC CONTENT
// const server = http.createServer((request, response) => {
//     console.log("Method : ", request.method)
//     console.log("The URL : ", request.url)
//     console.log("HEADERS : ", request.headers)
//     response.write("<h1>This is some cool heading</h1>")
//     response.end()

// })

server.listen("9090","localhost", () => console.log("HTTP Server started at PORT : 9090"))


// http://localhost:9090