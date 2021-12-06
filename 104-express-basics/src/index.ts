import express, { Request, Response } from 'express';
import path from 'path';
import { NotesRouter } from './router/note.routes';
const app = express()

app.use(express.json())

app.use("/notes", NotesRouter)
// app.use("/users", UserRouter)        // {email : string, age :number}

app.get("/login", (req, res) => {
    console.log("Query : ", req.query)
    res.send({message : "SUCCESS"})
})

app.post("/login", (req, res) => {
    console.log("REQ BODY : ", req.body)
    return res.send({message : "SUCCESS - POST"})
})

// Endpoints - http://localhost:9001
app.get("/", (req : Request, res : Response) => {
    res.sendFile(path.join(__dirname, '/public/index.html'))
})

app.listen(9001, () => {console.log("Express server started at PORT : 9001")})



