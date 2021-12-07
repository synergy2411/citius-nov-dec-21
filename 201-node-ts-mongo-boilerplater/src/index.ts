import express from 'express';
import { findNotes } from './controller/notes.controller';

const app = express()

app.get("/notes", async (req,res) => {
    try{
        const allNotes = await findNotes()
        return res.json(allNotes)
    }catch(err){
        console.log(err)
        res.status(500).send(err)
    }
})

app.listen(9095, () => console.log("Server started at PORT : 9095"))