import { model, Schema } from 'mongoose';
import { IUserDoc, IUserModel, User } from './user';

const userSchema = new Schema({
    username : {
        type : Schema.Types.String,
        required : true
    },
    password : {
        type : Schema.Types.String,
        required : true
    },
    age : {
        type : Schema.Types.Number,
        required : true
    },
    isAdmin : {
        type : Schema.Types.Boolean
    }
},{
    versionKey : false
})

userSchema.statics.createUser = (user : User) => {
    return new UserModel(user)
}

const UserModel = model<IUserDoc, IUserModel>("Users", userSchema)

export { UserModel };


