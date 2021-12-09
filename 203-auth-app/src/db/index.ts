import { connect } from 'mongoose';

connect("mongodb://localhost:27017/citius-db")
    .then(conn => {
        console.log("Mongo Connected...")
    })
    .catch(err => {
        console.log(err);
        process.exit(1)
    })