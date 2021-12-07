import express from 'express';
import { findNotes } from './controller/notes.controller';
import { NotesRouter } from './router/notes.router';

const app = express()

app.use("/notes", NotesRouter)

app.get("/home", (req, res) => {
    res.sendFile(__dirname+"/public/index.html")
})

app.listen(9095, () => console.log("Server started at PORT : 9095"))