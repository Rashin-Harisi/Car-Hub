"use client"

import React, { useEffect, useState } from 'react'
import SearchManufacture from './SearchManufacture';
import Image from 'next/image';
import './SearchBox.css'
import { useRouter } from 'next/navigation';

const SearchButton = ({ otherClasses }: { otherClasses: string }) => (
  <button type='submit' className={` -ml-3 z-10 ${otherClasses}`}>
    <Image src={"/magnifying-glass.svg"}
      alt={"search icon"}
      width={46}
      height={46}
      className='object-contain'
    />
  </button>
)

const SearchBox = ({reset}: {reset:boolean}) => {
  const [manufacture, setManufacture] = useState('')
  const [model, setModel] = useState("")
  const router = useRouter();

  useEffect(()=>{
    if(reset){
      setModel("")
      setManufacture("")
    }
  },[reset])

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (manufacture === "" && model === ""){
      return alert("Please fill in the search bar.")
    }
    updateSearchParams(model.toLowerCase(),manufacture.toLowerCase())
  }

  const updateSearchParams= (model:string, manufacture:string)=>{
    const searchParams =new URLSearchParams(window.location.search);
  
    if(model){
      searchParams.set("model",model)
    }else{
      searchParams.delete("model")
    }
  
    if(manufacture){
      searchParams.set("manufacture",manufacture)
    }else{
      searchParams.delete("manufacture")
    }
  
    const newPathname= `${window.location.pathname}?${searchParams.toString()}`
    router.push(newPathname);
  }
  return (
    <form className='searchbox' onSubmit={handleSearch}>
      <div className='items'>
        <SearchManufacture
          manufacture={manufacture}
          setManufacture={setManufacture} />
        <SearchButton otherClasses="sm:hidden" />
      </div>
      <div className='items'>
        <div className='flex items-center max-sx:w-[90%]'>
          <Image src='/model-icon.png' alt='car model'
            className='absolute w-[20px] h-[20px] ml-4'
            width={25} height={25} />
          <input type='text' name='model' value={model}
            onChange={(e) => setModel(e.target.value)}
            placeholder='Tiguan...' className='input' />
        </div>
        <SearchButton otherClasses='sm:hidden' />
      </div>
      <SearchButton otherClasses='max-sm:hidden' />
    </form>
  )
}

export default SearchBox