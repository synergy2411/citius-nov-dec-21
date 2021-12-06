// import * as fs from 'fs';
// import * as zlib from 'zlib';

// const gzip = zlib.createGzip()

// const inp = fs.createReadStream("./src/test.md")
// const out = fs.createWriteStream("./encrypted/test.txt.gz")

// inp.pipe(gzip).pipe(out)


import * as fs from 'fs';
import { createServer ,IncomingMessage, OutgoingMessage } from 'http';
import * as https from 'https';

const server = https.createServer({
    key : fs.readFileSync("./key.pem"),
    cert : fs.readFileSync("./cert.pem")
}, (req : IncomingMessage, res : OutgoingMessage) => {
    res.write("Hitting https secure router")
    res.end()
})

createServer((req : IncomingMessage, res : any) => {
    res.writeHead(301, {"Location" :"https://localhost:9090"})
    res.end()
}).listen(9000)

server.listen(9090, "localhost", () => console.log("HTTPS Server started at PORT : 9090"))