import express, { Request, Response } from 'express';
import * as jwt from 'jsonwebtoken';

const app = express();
const MY_KEY = "MY_SUPER_SECRET_KEY";
let token : string = '';
let _username : string = '';

app.use(express.json());

app.post("/api/login", (req : Request, res: Response) => {
    const {username , password} = req.body;
    // UserModel.find({username, password}).then(result => {
    //     token = jwt.sign({_id}, "Secret_key")
    // }).catch(err => {res.send(err)})
    if(username && password){
        // Write Code for authenticating the user from Database
        const token = jwt.sign({username}, MY_KEY)
        _username = username;
        return res.send({token})
    }else{
        return res.send({error : "Bad Credentials"})
    }
})

const ensureToken = (req : Request, res : Response, next : Function) => {
    const authHeader = req.headers.authorization
    if(!authHeader){
        return res.send({error : 'Auth header not available'})
    }
    token = authHeader?.split(" ")[1]
    next();
}

app.get("/api/protected", ensureToken, (req, res) => {
    if(token !== ''){
        jwt.verify(token, MY_KEY, (err, decode : any) => {
            if(err){
                return res.send(err)
            }else{
                const { username } = decode;
                if(username === _username){
                    return res.send({message : "SUCCESS"})
                }else{
                    return res.send({message : "Token Error"})
                }
            }
        })
    }else{
        return res.send({error : "Token not found"})
    }
})

app.listen(9092, () => console.log("Server started at PORT : 9092"))