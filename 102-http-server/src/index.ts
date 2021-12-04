import http from "http";
import colors from "colors";
import path from "path";
import fs from "fs";

const connect = require("connect");
const app = connect();
const server = http.createServer(app);
// const io = require("socket.io")(server)
const socket = require("socket.io");
const io = socket(server);

app.use((req: any, res: any) => {
  fs.promises
    .readFile(path.join(__dirname, "/public/index.html"))
    .then((contents) => {
      res.end(contents);
    });
    io.on("connection", () => {
      console.log("Connection established");
    });
});

server.listen(9090, "localhost", () => {
  console.log(colors.blue("HTTP Server started at PORT : 9090"));
});
