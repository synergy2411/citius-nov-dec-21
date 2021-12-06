"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateNoteById = exports.deleteNoteById = exports.getSingleNote = exports.createNote = exports.getAllNotes = void 0;
var notesdata_1 = __importDefault(require("../model/notesdata"));
var getAllNotes = function (req, res) { return res.send(__spreadArray([], notesdata_1.default, true)); };
exports.getAllNotes = getAllNotes;
var createNote = function (req, res) {
    var _a = req.body, title = _a.title, body = _a.body;
    if (title && body) {
        var newNote = { title: title, body: body, id: notesdata_1.default[notesdata_1.default.length - 1].id + 1 };
        notesdata_1.default.push(newNote);
        return res.status(201).send(__assign({}, newNote));
    }
    else {
        return res.status(401).send({ error: "Title / Body not found." });
    }
};
exports.createNote = createNote;
var getSingleNote = function (req, res) {
    var noteId = req.params.noteId;
    var noteFound = notesdata_1.default.find(function (n) { return n.id === Number(noteId); });
    if (noteFound) {
        return res.status(200).send(__assign({}, noteFound));
    }
    else {
        return res.status(404).send({ error: "Note NOT found for ID - " + noteId });
    }
};
exports.getSingleNote = getSingleNote;
var deleteNoteById = function (req, res) {
    var noteId = req.params.noteId;
    var position = notesdata_1.default.findIndex(function (n) { return n.id === +noteId; });
    var removedItem = notesdata_1.default.splice(position, 1);
    if (removedItem) {
        return res.status(200).send(__assign({}, removedItem));
    }
    else {
        return res.status(404).send({ message: "Not Found" });
    }
};
exports.deleteNoteById = deleteNoteById;
var updateNoteById = function (req, res) {
    var noteId = req.params.noteId;
    var position = notesdata_1.default.findIndex(function (n) { return n.id === +noteId; });
    if (position >= 0) {
        var _a = req.body, title = _a.title, body = _a.body;
        if (title) {
            notesdata_1.default[position].title = title;
        }
        if (body) {
            notesdata_1.default[position].body = body;
        }
        if (!title && !body) {
            return res.send({ error: "Invliad POST body" });
        }
        return res.send(__assign({}, notesdata_1.default[position]));
    }
    else {
        return res.send({ error: "Note ID does not exist" });
    }
};
exports.updateNoteById = updateNoteById;
//# sourceMappingURL=notes.controller.js.map