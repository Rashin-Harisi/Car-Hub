"use client"
import { useState } from "react"
import './SignupPage.css'
import CustomButton from "../modules/CustomButton"
import { toast, ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import Link from "next/link"
import { useRouter } from "next/navigation"
import { signIn } from "next-auth/react"

const SigninPage = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const clickHandler = async() => {
    setLoading(true);
    const res= await signIn("credentials",{email,password,redirect:false});
    setLoading(false);

    if(res){
      if(res.error){
        toast.error(res.error)
      }else{
        router.push('/')
      }
    }
  }

  return (
    <div className="flex flex-col px-3 lg:px-2">
      <h4 className="header">Sign in form</h4>
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
        {loading ? "Loading..." : (
          <CustomButton title='Signin' btnType="submit"
            clickHandler={clickHandler} buttonStyle="button" />
        )}
      </form>
      <p className="havingAccount">Have not had an account yet ? <Link className="text-[#304ffe]" href='/auth/signup'>Signup</Link></p>
      <ToastContainer />
    </div>
  )
}

export default SigninPage