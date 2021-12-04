import http, { IncomingMessage, ServerResponse } from "http";
import colors from "colors";
import path from "path";
import fs from "fs";
import { MessageChannel } from "worker_threads";

const connect = require("connect");
const app = connect();
const server = http.createServer(app);
const socket = require("socket.io");
const io = socket(server);

app.use((req: IncomingMessage, res: ServerResponse) => {
  fs.promises
    .readFile(path.join(__dirname, "/public/index.html"))
    .then((contents) => {
      res.end(contents);
    });
    io.on("connection", (client : any) => {
      console.log("Connection established!");
        client.on("messageToServer", ({message} : {message : string}) => {
            console.log(`Client Says : ${message} `)
        })
    });
});

server.listen(9090, "localhost", () => {
  console.log(colors.blue("HTTP Server started at PORT : 9090"));
});
