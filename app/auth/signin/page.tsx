import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import SigninPage from "@/components/templates/SigninPage"
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

const Signin =async () => {
  const session = await getServerSession(authOptions)
  console.log(session);
  if(session) redirect("/")
  return <SigninPage/>
}

export default Signin