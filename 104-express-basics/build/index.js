"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var note_routes_1 = require("./router/note.routes");
var app = (0, express_1.default)();
app.use(express_1.default.json());
app.use("/notes", note_routes_1.NotesRouter);
// app.use("/users", UserRouter)        // {email : string, age :number}
// Endpoints - http://localhost:9001
app.get("/", function (req, res) {
    console.log("URL  :", req.url);
    res.send("Hello from GET endpoint!");
});
app.listen(9001, function () { console.log("Express server started at PORT : 9001"); });
//# sourceMappingURL=index.js.map