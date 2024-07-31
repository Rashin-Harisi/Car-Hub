import User from "@/models/User";
import { verifyPassword } from "@/utils/auth";
import connectDB from "@/utils/connectDB";
import type { NextAuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials"


interface Credentials{
    email:string;
    password:string;
}

const authOptions:NextAuthOptions = {
    session: {strategy : "jwt"},
    secret: process.env.NEXTAUTH_SECRET,
    providers: [
        CredentialsProvider({
            name:"Credentials",
            credentials: {
                email: { label: "Email", type: "email" },
                password: { label: "Password", type: "password" }
              },
            async authorize(credentials,req){
                
                const {email,password} = credentials as Credentials;
                try {
                    await connectDB();
                }catch (error) {
                    console.log(error)
                    throw new Error("Internal Server Error!")
                }
                if (!email||!password) throw new Error("Invalid data!")
                
                const user = await User.findOne({email})
                if(!user) throw new Error("Please enter to your account first!")
                
                const isValid = await verifyPassword(password, user.password)
                if(!isValid) throw new Error("Email or Password is incorrect!")
                
                return {
                    id:user._id.toString(),
                    email: user.email
                }
            }
        })
    ]
}

const handler= NextAuth(authOptions)
export {handler as GET,handler as POST }
export {authOptions}
