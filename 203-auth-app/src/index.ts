import express, { NextFunction, Request, Response } from 'express';
import cors from 'cors';

const app = express()
app.use(cors())

const todos = [
    {label : 'grocery', status : false},
    {label : 'shopping', status : true}
]



const m1 = (req : Request, res : Response, next : NextFunction) => {
    console.log("Middleware 01")
    next()
}
const m2 = (req : Request, res : Response, next : NextFunction) => {
    console.log("Middleware 02")
    // next("Some problem")
    next()
}
const m3 = (req : Request, res : Response, next : NextFunction) => {
    console.log("Middleware 03")
    next()
}
// Error Middleware
const errorHandler = (err : Error, req : Request, res : Response, next: NextFunction) =>{
    
    console.log("Something bad happened", err)
}

app.get("/api/todos", m1, m2, m3, errorHandler, (req : Request, res : Response) => {
    res.json(todos)
})

app.listen(9091, () => {console.log("Server started at PORT : 9091")})