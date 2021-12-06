"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotesRouter = void 0;
var express_1 = __importDefault(require("express"));
var notes_controller_1 = require("../controller/notes.controller");
var NotesRouter = express_1.default.Router();
exports.NotesRouter = NotesRouter;
// http://localhost:9001/notes
NotesRouter.route("/")
    .get(notes_controller_1.getAllNotes)
    .post(notes_controller_1.createNote);
// http://localhost:9001/notes/:id
NotesRouter.route("/:noteId")
    .get(notes_controller_1.getSingleNote)
    .delete(notes_controller_1.deleteNoteById)
    .patch(notes_controller_1.updateNoteById);
//# sourceMappingURL=note.routes.js.map