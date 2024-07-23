

export const calculateCarRent = (city_mpg: number, year: number) => {
  const basePricePerDay = 50;
  const mileageFactor = 0.1; // Additional rate per mile driven
  const ageFactor = 0.05; // Additional rate per year of vehicle age

  // Calculate additional rate based on mileage and age
  const mileageRate = city_mpg * mileageFactor;
  const ageRate = (new Date().getFullYear() - year) * ageFactor;

  // Calculate total rental rate per day
  const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

  return rentalRatePerDay.toFixed(0);
};

export const updateSearchParams = (type: string, value: string ) => {
  const searchParams = new URLSearchParams(window.location.search);
  searchParams.set(type, value)
  const newPathname = `${window.location.pathname}?${searchParams.toString()}`
  return newPathname;
}

export const deleteSearchParams= ( type: string)=>{
  const searchParams = new URLSearchParams(window.location.search);
  searchParams.delete(type);
  const newPathname = `${window.location.pathname}?${searchParams.toString()}`
  return newPathname;
}


export const quantityCalculator= (state,id)=>{
  const index= state.selectedCars.findIndex((item:any)=>item.id === id);
  if(index=== -1){ return 0}else{
    return state.selectedCars[index].quantity
  }
}

//array.reduce(callback(accumulator, currentValue), initialValue)
export const sumQuantity = (products:Array<any>)=>{
  return products.reduce((acc,cur)=>acc + cur.quantity,0)
}

export const sumPrice= (products:Array<any>)=>{
  return products.reduce((acc,cur)=> acc + cur.price * cur.quantity , 0).toFixed(2)
}