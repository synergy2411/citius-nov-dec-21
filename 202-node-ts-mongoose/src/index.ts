import express from 'express';
import './db';
import { UserRouter } from './router/user.routes';

const app = express()

app.use("/users", UserRouter)

app.listen(9092, () => console.log("Server started at PORT :9092"))
