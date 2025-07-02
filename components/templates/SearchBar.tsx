"use client"

import './SearchBar.css'
import CustomFilter from '../modules/CustomFilter'
import SearchBox from './SearchBox'
import { fuels, yearsOfProduction } from '@/constants'
import CustomButton from '../modules/CustomButton'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

const SearchBar = () => {
    const [reset,setReset] = useState(false)
    const router= useRouter()
    //console.log("reset", reset);
    
    const deleteHandler= ()=>{
        setReset(true)
        router.push(window.location.pathname);
        setTimeout(()=>{setReset(false)},500)

    }
    return (
        <div id="searchBar" className="container">
            <div className="title flex flex-col">
                <h3>Car Catalogue</h3>
                <p>Explore out cars you might like</p>
            </div>
            <div className="inputs">
                <div className='mb-5'>
                    <SearchBox reset={reset}/>
                </div>
                <div className="filtersContainer">
                    <CustomFilter title="fuel" options={fuels} reset={reset}/>
                    <CustomFilter title="year" options={yearsOfProduction}  reset={reset} />
                </div>
                <CustomButton title='Clear Filters' btnType="button" 
                    clickHandler={deleteHandler} buttonStyle="bg-primary-blue text-white rounded-full h-[40px]"
                />
            </div>
        </div>
    )
}

export default SearchBar