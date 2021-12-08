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

const createUser = async(req: Request, res: Response) => {
    try{
        const newUser = new UserModel(req.body)
        const createdUser = await newUser.save()
        return res.json(createdUser).status(201)
    }catch(err){
        console.log(err);
        return res.send(err).status(500)
    }
}

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

const findUserAndDelete = async (req : Request, res: Response) => {
    const { id } = req.params;
    try{
        const deleteResult = await UserModel.findByIdAndDelete(id)
        console.log(id, deleteResult)
        return res.send(deleteResult)
    }catch(err){
        console.log(err);
        return res.send(err).status(500)
    }
}

const findUserAndUpdate =  async (req : Request, res: Response) => {
    const { id } = req.params;
    try{
        const updateResult = await UserModel.findByIdAndUpdate(id, req.body)
        return res.send(updateResult)
    }catch(err){
        console.log(err);
        return res.send(err).status(500)
    }
}

export { findUsers, findUserById, createUser, findUserAndDelete, findUserAndUpdate };
