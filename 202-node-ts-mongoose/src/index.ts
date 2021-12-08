import express from 'express';
import './db';
import morgan from 'morgan';
import { UserRouter } from './router/user.routes';

const app = express()

app.use(morgan('dev'))

app.use(express.json())

app.use("/users", UserRouter)

app.listen(9092, () => console.log("Server started at PORT :9092"))
