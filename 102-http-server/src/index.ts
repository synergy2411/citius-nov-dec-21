import colors from "colors";
import fs from "fs";
import http, { IncomingMessage, ServerResponse } from "http";
import path from "path";
import { Chat } from "./model/chats";

const connect = require("connect");
const app = connect();
const server = http.createServer(app);
const socket = require("socket.io");
const io = socket(server);

const chats : Chat[] = [];

app.use((req: IncomingMessage, res: ServerResponse) => {
  fs.promises
    .readFile(path.join(__dirname, "/public/index.html"))
    .then((contents) => {
      res.end(contents);
    });
});

io.on("connection", (client : any) => {
  console.log("Connection established!");
    client.on("messageToServer", ({message, chatterName} : Chat) => {
        chats.push({message, chatterName})
        console.log(`${chatterName} Says :: ${message} `)
        client.emit("messageToClient", {chatterName : 'Me', message})
        client.broadcast.emit("messageToClient", {chatterName, message})
        client.on("disconnect", () => {
            fs.writeFileSync(path.join(__dirname,"db/chatData.json"), JSON.stringify(chats))
        })
    })
});

server.listen(9090, "localhost", () => {
  console.log(colors.blue("HTTP Server started at PORT : 9090"));
});
