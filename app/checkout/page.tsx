import CheckOutPage from "@/components/templates/CheckOutPage"
import { getServerSession } from "next-auth"
import User from "@/models/User"
import Alert from "@/components/templates/Alert"
import { authOptions } from "@/utils/authOptions"

const Checkout = async() => {
  const session = await getServerSession(authOptions)
  if (session){
    const user = await User.findOne({email : session.user?.email})
      if(!user.license){
        return <Alert data="Please upload your license first!"/>
      }
  }
  if(!session){
    return <Alert data="Please login to your account first"/>
  }
  return <CheckOutPage />
}

export default Checkout