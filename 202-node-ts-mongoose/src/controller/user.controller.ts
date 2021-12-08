import { Request, Response } from "express";
import { UserModel } from '../model/user.model';

const findUsers = async (req: Request, res: Response) => {
    try{
    const allusers = await UserModel.find()
    return res.json(allusers)
    }catch(err){
        console.log(err);
        return res.send(err).status(500)
    }
};

const findUserById = async (req : Request, res: Response) => {
    const {id} = req.params;
    try {
        const foundUser = await UserModel.findById(id)
        return res.send(foundUser)
    }catch(err){
        console.log(err);
        return res.send(err).status(500)
    }
}

export { findUsers, findUserById };
