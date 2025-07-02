import User from "@/models/User";
import { verifyPassword } from "@/utils/auth";
import connectDB from "@/utils/connectDB";
import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials"

interface Credentials{
    email:string;
    password:string;
}


export const authOptions:NextAuthOptions = {
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
                
                const user = await User.findOne({email}).lean()
                if(!user) throw new Error("Please enter to your account first!")
                // @ts-ignore
                const isValid = await verifyPassword(password, user.password)
                if(!isValid) throw new Error("Email or Password is incorrect!")
                
                return {
                    // @ts-ignore
                    id:user._id.toString(),
                    // @ts-ignore
                    email: user.email
                }
            }
        })
    ]
}