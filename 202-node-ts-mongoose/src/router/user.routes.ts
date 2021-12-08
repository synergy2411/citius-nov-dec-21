import express from 'express';
import { findUserById, findUsers } from '../controller/user.controller';

const UserRouter = express.Router()

UserRouter.route("/")
    .get(findUsers)

UserRouter.route("/:id")
    .get(findUserById)

export { UserRouter }