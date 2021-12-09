import { model, Schema } from 'mongoose';

const userSchema = new Schema({
    username : 'string',
    password : 'string'
})

const UserModel = model("Users", userSchema)

export { UserModel }