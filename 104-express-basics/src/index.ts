import express, { Request, Response } from 'express';

const app = express()


let notes = [
    { id : 101, title : "Shopping", body : "to buy the jeans"},
    { id : 102, title : "Grocery", body : "to buy the pulses"},
    { id : 103, title : "Planting", body : "to pot the plants"},
]

app.use(express.json())

// PATCH - http://localhost:9001/notes/101
app.patch("/notes/:noteId", (req, res) => {
    const { noteId } = req.params;
    const position = notes.findIndex(n => n.id === +noteId)
    if(position >= 0){
        const { title, body } = req.body;
        if(title && body){
            notes[position].title = title;
            notes[position].body = body;
            return res.send({...notes[position]})
        }else{
            return res.send({error : "Invalid Body"})
        }
    }else{
        return res.send({error : "Note ID does not exist"})
    }
})


// POST - http://localhost:9001/notes
app.post("/notes", (req, res) => {
    const { title, body } = req.body;
    if(title && body){
        let newNote = { title, body, id : (notes[notes.length-1].id + 1)}
        notes.push(newNote)
        return res.status(201).send({...newNote})
    }else {
        return res.status(401).send({error : "Title / Body not found."})
    }
})

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
    res.json(notes)
})


// Endpoints - http://localhost:9001
app.get("/", (req : Request, res : Response) => {
    console.log("URL  :", req.url);
    res.send("Hello from GET endpoint!")
})

app.listen(9001, () => {console.log("Express server started at PORT : 9001")})



