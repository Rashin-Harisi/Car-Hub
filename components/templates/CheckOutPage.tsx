"use client"

import { useAppDispatch, useAppSelector } from '@/lib/hooks'
import React, { useState } from 'react'
import CheckoutCard from './CheckoutCard'
import { TbChecklist } from 'react-icons/tb'
import { FaHashtag } from 'react-icons/fa'
import { BsPatchCheck } from 'react-icons/bs'
import { checkout } from '@/lib/features/cart/cartSlice'
import './CheckOutPage.css'
import Form from './Form'
const CheckOutPage = () => {
    const [next, setNext] = useState(false)
    const state = useAppSelector(state => state.cart)
    const dispatch = useAppDispatch()


    return (
        <>
            <div className='flex flex-col md:flex-row gap-4'>
                <div className='w-[200px] h-[200px] border border-[#274C77] rounded-lg relative bg-[#E7ECEF]'>
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
                    {!next && (
                        <button className="bg-blue-500 text-white w-full h-[40px] absolute bottom-0 rounded-lg"
                            onClick={() => setNext(true)}>Next</button>
                    )}
                </div>
                <div className='flex-1'>
                    {state.selectedCars.length === 0 ? (<p className='text-xl font-semibold text-center w-[900px] py-5'>Empty!</p>) : (
                        state.selectedCars.map((item, index) => (
                            <CheckoutCard data={item} key={index} />
                        ))
                    )}
                </div>
            </div>
            {next && (
                <div className='flex-flex-col h-[200px]'>
                    <div> <Form /></div>
                    <button className="bg-blue-500 text-white w-full h-[40px] rounded-lg"
                        onClick={() => {dispatch(checkout())
                            setNext(false)
                        }}>Checkout</button>
                </div>
            )}
        </>
    )
}

export default CheckOutPage