const http = require("http");
const fs = require("fs").promises;
const path = require("path");
const url = require("url");


// READING QUERY PARAMETERS
// http://localhost:9090?key=value&id=00&name=iphone

const requestListener = (req, res) => {
    const queryString = url.parse(req.url, true).query;
    const {key, id, name} = queryString;
    console.log("Query String : ", key, id, name)
    res.end("Query Received")
}

const server = http.createServer(requestListener)




// SERVING MULTIPLE ROUTE
// http://localhost:9090/todos
// http://localhost:9090/books

// const books = [{id : 101, title : "you can win"}]
// const todos = [{id : 1001, label : "Shopping"}]

// const requestListener = (req, res) => {
//     switch (req.url) {
//         case "/books":{
//             return res.end(JSON.stringify(books))
//         }
//         case "/todos":{
//             return res.end(JSON.stringify(todos))
//         }
//         default:
//          return res.end("No URL found")
//     }
// }
// const server = http.createServer(requestListener)


// console.log(__dirname)
// SERVING HTML FILE
// const requestListener = (req, res) => {
//     fs.readFile(path.join(__dirname,"/public/index.html"))
//         .then(contents => {
//             res.write(contents)
//             res.end()
//         })
//         .catch(err => console.log(err))
// }

// const server = http.createServer(requestListener)

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
