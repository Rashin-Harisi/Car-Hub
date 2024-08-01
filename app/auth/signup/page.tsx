
import SignupPage from "@/components/templates/SignupPage"
import { authOptions } from "@/utils/authOptions"
import { getServerSession } from "next-auth"
import { redirect } from "next/navigation"


const Signup = async() => {
  const session = await getServerSession(authOptions)
 console.log(session);
  if(session) redirect("/")
  return <SignupPage/>
}

export default Signup