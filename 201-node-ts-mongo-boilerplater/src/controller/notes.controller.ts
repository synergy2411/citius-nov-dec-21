import { Request, Response } from "express";
import { MongoClient } from "mongodb";

const mongoURI =
  "mongodb+srv://citius:0LXwebyFsFLhDmt2@cluster0.e9xsq.mongodb.net/citius-db?retryWrites=true&w=majority";
const mongoLocalURI = "mongodb://localhost:27017";

let _db: any;

// MongoClient.connect(mongoURI)
MongoClient.connect(mongoLocalURI)
  .then((client) => {
    console.log("Mongo Connected!");
    _db = client.db("citius-db");
  })
  .catch((err) => {
    console.log(err);
    process.exit(1);
  });

export const deleteNote = () => {
  _db
    .collection("notes")
    .deleteOne({ title: "shopping" }, (err: any, result: any) => {
      if (err) console.log(err);
      console.log(result);
    });
};

export const createNote = () => {
  _db
    .collection("notes")
    .insertOne(
      { title: "planting", body: "to pot the plants" },
      (err: any, result: any) => {
        if (err) {
          console.log(err);
        }
        console.log(result);
      }
    );
};
export const findNotes = (req : Request, res: Response) => {
    _db.collection("notes")
      .find()
      .toArray((err: any, docs: any) => {
          if(err) {
              return res.send(err)
          }
        return res.json(docs);
      });
};
