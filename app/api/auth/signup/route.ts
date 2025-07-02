import { NextResponse } from "next/server";
import connectDB from "@/utils/connectDB";
import { hashPassword } from "@/utils/auth";
import User from "@/models/User";

export async function POST(req: Request){
    try {
         await connectDB()  
        const {email , password} = await req.json();
        if (!email || !password){
            return NextResponse.json(
                {error: "Invalid Data"},
                {status: 422}
            )
        }
        const existingUser = await User.findOne({email});
        if (existingUser){
            return NextResponse.json(
                {error:"User's already existed!"},
                {status:422}
            )
        }
        const hashedPassword = await hashPassword({password});
        const newUser = await User.create({
            email: email,
            password: hashedPassword,
        })
        console.log(newUser);
        return NextResponse.json(
            {message: "Account is created successfully"},
            {status: 201}
        )
    } catch (error) {
        console.log(error);
        return NextResponse.json(
            {error: "Internal Server Error"},
            {status: 500}
        )
    }
}