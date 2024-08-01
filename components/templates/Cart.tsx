"use client"

import { useAppSelector } from "@/lib/hooks";
import { BsCart4 } from "react-icons/bs";

const Cart = () => {
    const state = useAppSelector(state => state.cart);
    const length = state.selectedCars.length;
    //console.log("length", length);
  return (
    <div className="flex relative">
        <BsCart4 />
        { length>0 && <span className="xl:text-black  text-white text-center flex justify-center items-center bg-blue-500 rounded-full w-5 h-5 -right-4 -top-2 z-10 absolute">{length}</span>}
    </div>
  )
}

export default Cart