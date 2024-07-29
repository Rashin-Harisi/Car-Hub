import { Schema, models, model } from "mongoose";

export interface IUser{
    email: string;
    password: string;
    name:string;
    phone:string;
    address:string;
    license:string;
    picture:string;
    createdAt: Date;
}

const userSchema= new Schema<IUser>({
    email:{
        type: String,
        required: true,
    },
    password:{
        type: String,
        required: true,
    },
    name:{
        type:String
    },
    phone:{
        type:String
    },
    address:{
        type:String
    },
    license:{
        type:String
    },
    picture:{
        type:String
    },
    createdAt:{
        type:Date,
        default : ()=>Date.now(),
        immutable: true,
    },
})

const User = models.User || model<IUser>("User", userSchema);

export default User;