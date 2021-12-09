import express from 'express';
import multer from 'multer';

const app = express();

const storage = multer.diskStorage({
    destination : (req, file, cb) => {
        cb(null, "./src/upload/")
    },
    filename : (req, file, cb) => {
        const suffix = Date.now().toString();
        cb(null, suffix + "-" + file.fieldname)
    }
})
const upload = multer({
    storage
})

// const upload = multer.memoryStorage()
// const upload = multer({dest : 'tmp/'})

app.use(express.json());
app.use(express.urlencoded({extended : true}));
app.use(express.static(__dirname + "/public"))

app.get("/login", (req, res) => {
    res.sendFile(__dirname+"/public/index.html")
})

app.post("/login", upload.single('avatar') ,(req, res) => {
    console.log("Body : ", req.body);
    console.log("FILE : ", req.file)
    res.send({message : "SUCCESS"})
})

// Content Negotiation

const iplWinners = [
    { team : "SRH", year : 2014},
    { team : "DD", year : 2013},
    { team : "CSK", year : 2012},
    { team : "CSK", year : 2009},
]

app.get("/negotiated", (req, res) => {
    res.format({
        'text/html' : () => { 
            let lists = '';
            iplWinners.forEach(w => {
                lists +=`<li>${w.team} won in the year ${w.year}</li>`
            })
            res.send(`<ul>
                ${lists}
            </ul>`)
        },
        'application/json' : () => res.json(iplWinners),
        'text/plain' : () => {
            let winners : string = '';
            iplWinners.forEach(winner => {
                winners += winner.team + " won in the year " + winner.year + "\n";
            })
            res.send(winners)
        }
    })
})

app.listen(9091, () =>console.log("Server started at PORT : 9091"))