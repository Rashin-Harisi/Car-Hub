
import  './SearchBar.css'
import CustomFilter from '../modules/CustomFilter'
import SearchBox from '../modules/SearchBox'
import { fetchCar } from '@/utils/rapidApi'
import CarCard from '../modules/CarCard'

const SearchBar = async() => {
    const allCars= await fetchCar()
    console.log(allCars);
    const isEmpty= !Array.isArray(allCars) || !allCars || allCars.length<1;
   
  return (
    <div id="searchBar" className="container">
        <div className="title">
            <h3>Car Catalogue</h3>
            <p>Explore out cars you might like</p>
        </div>
        <div className="inputs">
            <div className='mb-5 '>
                <SearchBox/>
            </div>
            <div className="filtersContainer">
                <CustomFilter/>
                <CustomFilter/>
            </div>
        </div>
        {isEmpty ? (
                <p>Oops, There is no cars!</p>
        ) : (
            <section className='flex flex-wrap gap-10 justify-around'>
                {allCars.map((car,index)=><CarCard car={car} key={index} />)}
            </section>
        ) }
        
    </div>
  )
}

export default SearchBar