import mongoose from 'mongoose';

const mongoURI = "mongodb://localhost:27017/citius-db";

mongoose.connect(mongoURI)
    .then(client => console.log("Mongo Connected"))
    .catch(console.log)