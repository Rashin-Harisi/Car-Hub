"use client"

import React, { useState } from 'react'
import SearchManufacture from './SearchManufacture';

const SearchBox = () => {
    const [manufacture, setManufacture] = useState('')
  return (
    <form>
        <div id="searchBarItems">
          <SearchManufacture 
            manufacture={manufacture} 
            setManufacture={setManufacture}/>
        </div>
    </form>
  )
}

export default SearchBox