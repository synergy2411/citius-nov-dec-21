import { MongoClient } from 'mongodb';


const mongoURI = "mongodb+srv://citius:0LXwebyFsFLhDmt2@cluster0.e9xsq.mongodb.net/citius-db?retryWrites=true&w=majority";
const mongoLocalURI = "mongodb://localhost:27017"

let _db : any;


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
        findNotes()
    })
    .catch(err => {
        console.log(err);
        process.exit(1);
    })

