import express, { Request, Response } from "express";
import "./db";
import { UserModel } from "./model/user.model";
import { sign, verify } from "jsonwebtoken";

const app = express();
const SECRET_KEY = "My Super Secret Key";
let _token = "";
let _userToken = '';

app.use(express.json());

app.post("/api/login", async (req: Request, res: Response) => {
  const { username, password } = req.body;
  try {
    const foundUser = await UserModel.findOne({ username, password });
    if (foundUser) {
      _token = sign({ id: foundUser._id }, SECRET_KEY);
      return res.send({ ...foundUser._doc, token: _token });
    } else {
      return res.send({ error: "User does not exist" }).status(404);
    }
  } catch (err) {
    return res.send({ error: "Error while fetching user" }).status(500);
  }
});

const ensureToken = (req: Request, res: Response, next: Function) => {
  let authHeader = req.headers.authorization;       // 'Bearer <token>'
  if(!authHeader){
    return res.send({'error' : "Authorization header not found"})
  }
   _userToken = authHeader.split(" ")[1]
  next();
};

app.get("/api/protected", ensureToken, (req, res) => {
    verify(_userToken, SECRET_KEY, (err, decode) => {
        if(err){
            console.log("ERROR", err)
            return res.send(err);
        }
        console.log("DECODE : ", decode);
        return res.send({ message: "SUCCESS" });
    })
});

app.listen(9092, () => console.log("Server started at PORT : 9092"));
