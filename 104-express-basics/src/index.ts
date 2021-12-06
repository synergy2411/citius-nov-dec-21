import express, { Request, Response } from 'express';
import { NotesRouter } from './router/note.routes';
const app = express()

app.use(express.json())

app.use("/notes", NotesRouter)
// app.use("/users", UserRouter)        // {email : string, age :number}

// Endpoints - http://localhost:9001
app.get("/", (req : Request, res : Response) => {
    console.log("URL  :", req.url);
    res.send("Hello from GET endpoint!")
})

app.listen(9001, () => {console.log("Express server started at PORT : 9001")})



