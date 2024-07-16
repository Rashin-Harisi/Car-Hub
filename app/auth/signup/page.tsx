import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import SignupPage from "@/components/templates/SignupPage"
import { getServerSession } from "next-auth"
import { redirect } from "next/navigation"


const Signup = async() => {
  const session = await getServerSession(authOptions)
  console.log(session);
  if(session) redirect("/")
  return <SignupPage/>
}

export default Signup