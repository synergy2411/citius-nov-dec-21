import { model, Schema } from 'mongoose';

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

const UserModel = model("Users", userSchema)

export { UserModel }