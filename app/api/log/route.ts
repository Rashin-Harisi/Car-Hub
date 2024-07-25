import Log from "@/models/Log";
import User from "@/models/User";
import connectDB from "@/utils/connectDB";
import { Types } from "mongoose";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function GET(){
    try {
        await connectDB();
        const session = await getServerSession();
        const user = await User.findOne({email: session?.user?.email});
        const logs = await Log.find({userId:user._id})
        return NextResponse.json({
            data:logs
        },{status: 200})
    } catch (error) {
        return NextResponse.json({error:"Internal Server Error!"},{status: 500})
        
    }
}

export async function POST(req:Request){
    try {
        await connectDB();
        const body = await req.json()
        const { address,city, phone,items,note} = body;
        const session= await getServerSession();
        if(!session){
            return NextResponse.json({
                error:"Please Login to your account first"
            },{
                status: 401
            })
        }
        const user = await User.findOne({email: session?.user?.email});
        if(!user){
            return NextResponse.json({
                error: "Account was not found!"
            },{
                status:404
            })
        }
        if( !address || !phone || !items ||!city){
            return NextResponse.json({
                error: "Invalid Data"
            },{
                status: 400
            })
        }
        const newLog= await Log.create({address,city, phone,items,note,userId:new Types.ObjectId(user._id)})
        return NextResponse.json({
            message:"Log is added"
        },{
            status: 201
        })
    } catch (error) {
        return NextResponse.json({
            error: "Internal Server Error!"
        },{
            status: 500
        })
    }
}