import { model, Schema } from 'mongoose';
import { IUserDoc, IUserModel, User } from './user';

const userSchema = new Schema({
    username : {
        type : Schema.Types.String,
        required : true,
        validate : {
            validator : (value : string) => {
                return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value);
            },
            message : (props: any) => {
                return `${props.value} is not in proper format`;
            }
        },
    },
    password : {
        type : Schema.Types.String,
        required : true,
        validate : {
            validator : (v : string) => {
                return v.includes('!')
            },
            message : (props: any) => {
                return `${props.value} does not contain any special character`
            }
        }
    },
    age : {
        type : Schema.Types.Number,
        required : true,
        min : [18, "Too less age to work"],
        max : [60, 'Live Long!!']
    },
    role : {
        type : Schema.Types.String,
        enum : ['ADMIN', "EMPLOYEE"],
        required : true
    },
    isAdmin :{
        type : 'boolean'
    }
},{
    versionKey : false
})

userSchema.statics.createUser = (user : User) => {
    return new UserModel(user)
}

const UserModel = model<IUserDoc, IUserModel>("Users", userSchema)

export { UserModel };


