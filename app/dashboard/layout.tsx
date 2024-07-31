import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Discover world's best car showcase application",
};

const DashboardLayout = ({children}: {children:React.ReactNode}) => {
  return (
    <div className="relative top-[100px] max-w-[1200px] mx-auto min-h-[500px]">
        {children}
    </div>
  )
}

export default DashboardLayout