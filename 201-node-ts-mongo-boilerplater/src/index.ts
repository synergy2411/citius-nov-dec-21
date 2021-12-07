import { MongoClient } from 'mongodb';


const mongoURI = "mongodb+srv://citius:0LXwebyFsFLhDmt2@cluster0.e9xsq.mongodb.net/citius-db?retryWrites=true&w=majority";
const mongoLocalURI = "mongodb://localhost:27017"

let _db : any;

const deleteNote = () => {
    _db.collection("notes").deleteOne(
        { title : "shopping"}, 
        (err : any, result: any) => {
            if(err) console.log(err)
            console.log(result);
    })
}

const createNote = () => {
    _db.collection("notes")
        .insertOne({title : "planting", body :"to pot the plants"}, (err : any, result: any)=>{
            if(err){console.log(err)}
            console.log(result);
        })
}
const findNotes = () => {
    _db.collection("notes").find().toArray((err: any, docs : any) => {
        console.log(docs)
    })
}

// MongoClient.connect(mongoURI)
MongoClient.connect(mongoLocalURI)
    .then(client => {
        console.log("Mongo Connected!")
        _db = client.db("citius-db")
        // findNotes()
        // createNote()
        deleteNote()
    })
    .catch(err => {
        console.log(err);
        process.exit(1);
    })
