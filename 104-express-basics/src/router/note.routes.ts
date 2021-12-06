import express from "express";
import { Note } from "../model/notes.model";
import notes from '../model/notesdata'
import { createNote, deleteNoteById, getAllNotes, getSingleNote, updateNoteById } from '../controller/notes.controller';

const NotesRouter = express.Router();

// http://localhost:9001/notes
NotesRouter.route("/")
  .get(getAllNotes)
  .post(createNote);
// http://localhost:9001/notes/:id
NotesRouter.route("/:noteId")
  .get(getSingleNote)
  .delete(deleteNoteById)
  .patch(updateNoteById);

export { NotesRouter };
