"use client"
import { useState } from "react"
import './SignupPage.css'
import CustomButton from "../modules/CustomButton"
import { toast, ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import Link from "next/link"
import { useRouter } from "next/navigation"



const SignupPage = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [rePassword, setRePassword] = useState("")
    const [loading, setLoading] = useState(false)
    const router= useRouter()

    const clickHandler = async ()=>{
        if(password !== rePassword){
            toast.error("Error in confirming password!")
            return;
        }
        setLoading(true);
        const res= await fetch('/api/auth/signup',{
            method: "POST",
            body: JSON.stringify({email,password}),
            headers: {
                "Content-Type" : "application/json"
            }
        });
        const data= await res.json();
        console.log(data);
        setLoading(false);
        if (res.status === 201){
            toast.success(data.message)           
            router.push('/auth/signin')
        }else{
            toast.error(data.error)
        }
    }
    return (
        <div className="flex flex-col px-3 lg:px-2">
            <h4 className="header">Sign up form</h4>
            <form className="flex flex-col">
                <label className="label">Email: </label>
                <input 
                    className="input"
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} />
                <label className="label">Password: </label>
                <input 
                    className="input"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} />
                <label className="label">Confirm the password: </label>
                <input 
                className="input"
                    type="password"
                    value={rePassword}
                    onChange={(e) => setRePassword(e.target.value)} />
                    {loading ? "Loading..." :(
                        <CustomButton title='Signup' btnType="submit"
                        clickHandler={clickHandler} buttonStyle="button"/>
                    )}
            </form>
            <p className="havingAccount">Have an account? <Link className="text-[#304ffe]" href='/auth/signin'>Sign in</Link></p>
            <ToastContainer />
        </div>
    )
}

export default SignupPage