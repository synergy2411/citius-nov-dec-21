import { Request, Response } from "express";
import { Note } from "../model/notes.model";
import notes from "../model/notesdata";

const getAllNotes = (req: Request, res: Response) => res.send([...notes]);

const createNote = (req: Request, res: Response) => {
  const { title, body } = req.body;
  if (title && body) {
    let newNote: Note = { title, body, id: notes[notes.length - 1].id + 1 };
    notes.push(newNote);
    return res.status(201).send({ ...newNote });
  } else {
    return res.status(401).send({ error: "Title / Body not found." });
  }
};

const getSingleNote = (req: Request, res: Response) => {
  const { noteId } = req.params;
  const noteFound = notes.find((n) => n.id === Number(noteId));
  if (noteFound) {
    return res.status(200).send({ ...noteFound });
  } else {
    return res.status(404).send({ error: "Note NOT found for ID - " + noteId });
  }
};

const deleteNoteById = (req: Request, res: Response) => {
  const { noteId } = req.params;
  const position = notes.findIndex((n) => n.id === +noteId);
  const removedItem = notes.splice(position, 1);
  if (removedItem) {
    return res.status(200).send({ ...removedItem });
  } else {
    return res.status(404).send({ message: "Not Found" });
  }
};

const updateNoteById = (req: Request, res: Response) => {
  const { noteId } = req.params;
  const position = notes.findIndex((n) => n.id === +noteId);
  if (position >= 0) {
    const { title, body } = req.body;
    if (title) {
      notes[position].title = title;
    }
    if (body) {
      notes[position].body = body;
    }
    if (!title && !body) {
      return res.send({ error: "Invliad POST body" });
    }
    return res.send({ ...notes[position] });
  } else {
    return res.send({ error: "Note ID does not exist" });
  }
};
export {
  getAllNotes,
  createNote,
  getSingleNote,
  deleteNoteById,
  updateNoteById,
};
