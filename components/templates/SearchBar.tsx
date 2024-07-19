"use client"

import './SearchBar.css'
import CustomFilter from '../modules/CustomFilter'
import SearchBox from '../modules/SearchBox'
import { fuels, yearsOfProduction } from '@/constants'
import CustomButton from '../modules/CustomButton'
import { useRouter } from 'next/navigation'

const SearchBar = () => {
    
    const router= useRouter()
    const deleteHandler= ()=>{router.push(window.location.pathname)}
    return (
        <div id="searchBar" className="container">
            <div className="title">
                <h3>Car Catalogue</h3>
                <p>Explore out cars you might like</p>
            </div>
            <div className="inputs">
                <div className='mb-5'>
                    <SearchBox />
                </div>
                <div className="filtersContainer">
                    <CustomFilter title="fuel" options={fuels} />
                    <CustomFilter title="year" options={yearsOfProduction} />
                </div>
                <CustomButton title='Clear Filters' btnType="button" 
                    clickHandler={deleteHandler} buttonStyle="bg-primary-blue text-white rounded-full h-[40px]"
                />
            </div>
        </div>
    )
}

export default SearchBar