import express from 'express';
import cors from 'cors';

const app = express()
app.use(cors())

const todos = [
    {label : 'grocery', status : false},
    {label : 'shopping', status : true}
]

app.get("/api/todos", (req, res) => {
    res.json(todos)
})

app.listen(9091, () => {console.log("Server started at PORT : 9091")})