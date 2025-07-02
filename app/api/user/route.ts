import User from "@/models/User";
import connectDB from "@/utils/connectDB";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function GET(){
    try {
        await connectDB();
        const session = await getServerSession();
        const user = await User.findOne({email: session?.user?.email}).lean();
        return NextResponse.json({
            data:user
        },{status: 200})
    } catch (error) {
        return NextResponse.json({error:"Internal Server Error!"},{status: 500})
        
    }
}

export async function PATCH(req:Request){
    try {
        await connectDB();
        const body = await req.json()
        const { name,phone,address,license,picture} = body;
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
        if( !address || !phone || !name ||!license || !picture){
            return NextResponse.json({
                error: "Invalid Data"
            },{
                status: 400
            })
        }
        user.name = name
        user.phone = phone
        user.address = address
        user.license = license
        user.picture = picture
        user.save();

        console.log(user);
        return NextResponse.json({
            message:"Your Info is submitted"
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