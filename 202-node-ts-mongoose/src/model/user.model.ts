import { model, Schema } from 'mongoose';

const userSchema = new Schema({
    username : 'string',
    password : 'string'
},{
    versionKey : false
})

const UserModel = model("Users", userSchema)

export { UserModel }