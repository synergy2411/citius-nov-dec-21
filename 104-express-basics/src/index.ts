import express, { Request, Response } from 'express';

const app = express()


let notes = [
    { id : 101, title : "Shopping", body : "to buy the jeans"},
    { id : 102, title : "Grocery", body : "to buy the pulses"},
    { id : 103, title : "Planting", body : "to pot the plants"},
]


// POST - http://localhost:9001/notes

// PATCH - http://localhost:9001/notes/101


// DELETE - http://localhost:9001/notes/101
app.delete("/notes/:noteId", (req, res) => {
    const { noteId } = req.params;
    const noteFound = notes.find(n => n.id === +noteId)
    if(noteFound){
        const duplicatedNotes = notes.filter(n => n.id !== +noteId)
        notes = [...duplicatedNotes]
        return res.status(200).send({...noteFound}) 
    }else{
        return res.status(404).send({message : "Not Found"})
    }
})

// GET Endpoints - http://localhost:9001/notes/101
app.get("/notes/:noteId", (req, res) => {
    const {noteId} = req.params;
    const noteFound = notes.find(n => n.id === Number(noteId))
    if(noteFound){
        return res.status(200).send({...noteFound})
    }else{
        return res.status(404).send({error : "Note NOT found for ID - "+noteId})
    }
})

// GET Endpoints - http://localhost:9001/notes
app.get("/notes", (req, res) => {
    console.log("URL : ", req.url);
    res.json(notes)
})


// Endpoints - http://localhost:9001
app.get("/", (req : Request, res : Response) => {
    console.log("URL  :", req.url);
    res.send("Hello from GET endpoint!")
})

app.listen(9001, () => {console.log("Express server started at PORT : 9001")})



