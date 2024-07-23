
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Signup",
  description: "Discover world's best car showcase application",
};

const SignupLayout = ({children}: {children:React.ReactNode}) => {
  return (
    <div className="relative top-[100px] max-w-[500px] mx-auto flex">
        {children}
    </div>
  )
}

export default SignupLayout