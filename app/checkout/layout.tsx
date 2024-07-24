import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Basket",
  description: "Discover world's best car showcase application",
};

const CheckoutLayout = ({children}: {children:React.ReactNode}) => {
  return (
    <div className="relative top-[100px] xl:max-w-[1200px] md:max-w-[1000px] pl-3 mx-auto">
        {children}
    </div>
  )
}

export default CheckoutLayout