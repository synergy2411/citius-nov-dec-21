import express   from "express";
import { findNotes } from "../controller/notes.controller";

const NotesRouter = express.Router()

NotesRouter.route("")
    .get(findNotes)

export { NotesRouter }