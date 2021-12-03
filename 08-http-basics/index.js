const connect = require("connect");
const http = require("http");

const app = connect();


app.use((req, res, next)=>{
    next(new Error("Something Bad happened!"))
})

app.use((req, res, next)=>{
    res.end("After Error Middleware")
})

app.use((err, req, res, next)=>{
    console.log(err.message);
    return res.end("Error Handler middleware")
})


const todos = (req, res, next) => {
    return res.end("Todos coming soon...")
}

const books = (bookName) => {
    return (req, res) => {
        console.log("BookName :", bookName)
        return res.end("Books coming soon...")
    }
}

// app.use("/todos", todos)
app.use("/books", books("The book"))

app.use((request, response, next) => {
    console.log("Method : ", request.method)
    let rnd = Math.round(Math.random()*10)
    if(rnd > 3){
        return response.end("Greater than 3")
    }
    next()
})

app.use("/todos", todos)

app.use((req, res, next)=>{
    return res.end("Hello Client")
})

let server = http.createServer(app)

server.listen(9090, "localhost", () => console.log("HTTP Server started..."))