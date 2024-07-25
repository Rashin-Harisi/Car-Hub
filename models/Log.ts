import { CarProps } from "@/components/templates/CarCard";
import { Schema, models, model,ObjectId } from "mongoose";

interface ILog{
    address: string;
    phone:string;
    items: CarProps[];
    createdAt: Date;
    userId:ObjectId;
    note: string;
}

const logSchema= new Schema<ILog>({
    address:{
        type: String,
        required: true,
    },
    phone:{
        type: String,
        required: true,
    },
    items:{
        type: [],
        required: true,
    },
    note:{
        type: String,
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: "User",
    },    
    createdAt:{
        type:Date,
        default : ()=>Date.now(),
        immutable: true,
    },
})

const Log = models.Log || model<ILog>("Log", logSchema);

export default Log;