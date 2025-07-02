import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign in",
  description: "Discover world's best car showcase application",
};

const SigninLayout = ({children}: {children:React.ReactNode}) => {
  return (
    <div className="relative top-[100px] max-w-[500px] mx-auto h-[500px]">
        {children}
    </div>
  )
}

export default SigninLayout