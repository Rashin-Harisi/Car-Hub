"use client"

import { decrease, increase, removeItem } from "@/lib/features/cart/cartSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { MdDeleteOutline } from "react-icons/md";

const CheckoutCard = ({ data }: any) => {
    //console.log(data);
    const { make, model, price, id, quantity } = data;
    const dispatch = useAppDispatch();
    const state = useAppSelector(state => state.cart);
    return (
        <div className="border border-dashed border-[#274C77] rounded-lg w-[90%] mx-auto h-[150px] mb-[15px] flex gap-5 pt-5">
            <div className="flex-1 pl-5">
                <h2 className="capitalize text-xl font-bold">{make} {model}</h2>
                <p className="flex mt-6 text-[32px] leading-[38px] font-extrabold">
                    <span className="self-start text-[14px] leading-[17px] font-semibold">€</span>
                    {price}
                    <span className="self-end text-[14px] leading-[17px] font-medium">/day</span>
                </p>
            </div>
            <div className="w-[200px] h-[40px] my-auto text-xl flex items-center">
                {quantity === 1 && (
                    <button onClick={() => dispatch(removeItem(data))}><span className="text-xl"><MdDeleteOutline /></span></button>
                )}
                {quantity > 1 && (
                    <button onClick={() => dispatch(decrease(data))}><span className="text-2xl">-</span></button>
                )}
                <span className=" text-black text-center py-auto mx-2 font-semibold">{quantity}</span>
                
                <button onClick={() => dispatch(increase(data))}><span className="text-2xl">+</span></button> Day(s)
                
            </div>
        </div>
    )
}

export default CheckoutCard