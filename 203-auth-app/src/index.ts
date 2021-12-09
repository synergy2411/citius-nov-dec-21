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

// const upload = multer({dest : 'tmp/'})

app.use(express.json());
app.use(express.urlencoded({extended : true}));

app.get("/login", (req, res) => {
    res.sendFile(__dirname+"/public/index.html")
})

app.post("/login", upload.single('avatar') ,(req, res) => {
    console.log("Body : ", req.body);
    console.log("FILE : ", req.file)
    res.send({message : "SUCCESS"})
})

app.listen(9091, () =>console.log("Server started at PORT : 9091"))