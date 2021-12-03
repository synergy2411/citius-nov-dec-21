const fs = require("fs");


// console.log("Start")
// let bufferData = fs.readFileSync("./index.js")
// console.log(bufferData.toString())
// console.log("End")

// Start -> Data -> End


// console.log("Start")
// fs.readFile("util.js", (err, data) => {
//     if(err) console.log(err)
//     console.log(data)
// })
// console.log("End")

// Start -> End -> data


// fs.writeFile("utils.js","Hello World", { mode : 'a'}, (err) => {
//     if(err) console.log(err)
//     console.log("Appended");
// })

// - SERVER
// Response : Writable Stream
// Request : Readable Stream



const readStream = fs.createReadStream("./util.js")

const writeStream = fs.createWriteStream("./test.md")

// - Pipe
// readStream.pipe(writeStream)

// Download Server
// readStream.pipe(response)

// upload Server
// request.pipe(writeStream);

// PROCESS
// - standard Input : READ
// - standard Output : WRITE
// readStream.pipe(process.stdout)

// process.stdin.on("readable", () => {
//     let dataBuffer = process.stdin.read()
//     if(dataBuffer != null){
//         console.log(dataBuffer.toString())
//         writeStream.write(dataBuffer.toString())
//     }else{
//         console.log("Completed")
//     }
// })


