"use client"

import { useAppDispatch, useAppSelector } from '@/lib/hooks'
import React, { useState } from 'react'
import CheckoutCard from './CheckoutCard'
import { TbChecklist } from 'react-icons/tb'
import { FaHashtag } from 'react-icons/fa'
import { BsPatchCheck } from 'react-icons/bs'
import { checkout, details } from '@/lib/features/cart/cartSlice'
import './CheckOutPage.css'
import Form from './Form'
import { redirect, useRouter } from 'next/navigation'



const CheckOutPage = () => {
    const [address,setAddress]=useState("")
    const [city,setCity]=useState("")
    const [note,setNote]=useState("")
    //console.log(address,city,note);

    const state = useAppSelector(state => state.cart)
    const dispatch = useAppDispatch()
    const router= useRouter()

    const clickHandler =()=>{
        if(!address || !city) return alert("Please fill required information first.")
        dispatch(checkout())
        alert("Thank you for your tryst. We hope to see you again")
        router.push('/')
    }
    return (
            <div className='flex flex-col md:flex-row gap-4'>
                <div className='w-[200px] h-[200px] border border-dashed border-[#274C77] rounded-lg relative bg-[#E7ECEF]'>
                    <div className='navbarItems'>
                        <TbChecklist />
                        <p>Total :</p>
                        <span>{state.total} €</span>
                    </div>
                    <div className='navbarItems'>
                        <FaHashtag />
                        <p>Days :</p>
                        <span>{state.dayCounters} </span>
                    </div>
                    <div className='navbarItems'>
                        <BsPatchCheck />
                        <p>Status :</p>
                        <span>{!state.checkout && "Pending..."}</span>
                    </div>
                    {!state.next && (
                        <button className="bg-blue-500 text-white w-full h-[40px] absolute bottom-0 rounded-lg"
                            onClick={() => dispatch(details())}>Next</button>
                    )}
                </div>
                <div className='flex-1'>
                    {state.selectedCars.length === 0 ? (<p className='text-xl font-semibold text-center w-[500px] py-5'>Empty!</p>) : (
                        state.selectedCars.map((item, index) => (
                            <CheckoutCard data={item} key={index} />
                        ))
                    )}
                    {state.next && state.selectedCars.length !== 0 && (
                        <div className='flex flex-col h-[500px] w-[90%] mx-auto mt-5'>
                            <div> <Form
                                setAddress={setAddress}                               
                                setCity={setCity}
                                setNote={setNote} /></div>
                            <button className="bg-blue-500 text-white w-full h-[40px] rounded-lg mt-5"
                                onClick={clickHandler}>Checkout</button>
                        </div>
                    )}
                </div>
            </div>
    )
}

export default CheckOutPage