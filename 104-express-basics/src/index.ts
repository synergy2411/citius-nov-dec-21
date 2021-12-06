import express from 'express';
import * as http from 'http';

const app = express()

const server = http.createServer(app);

app.use((req, res) => {
    res.send("Hello from Express")
})

server.listen(9090, "localhost", () =>{console.log("Express server running on PORT : 9090")})


