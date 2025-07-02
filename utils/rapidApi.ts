import { CarProps } from "@/components/templates/CarCard";
import { v4 as uuidv4 } from 'uuid';
import { calculateCarRent } from "./functions";

export interface filterProps{
    manufacture ?:string;
    year?: number;
    model?:string;
    limit?:number;
    fuel?:string;
}
export async function fetchCar(filters:filterProps){
    const{manufacture,year,model,limit,fuel}=filters;

    const headers = {
        'X-Rapidapi-Host': 'cars-by-api-ninjas.p.rapidapi.com' ,
        'X-RapidAPI-Key': 'cc1f0be28bmsh0b16ace8fcb965ep1b2b64jsn40971b8f18fb'
    }

    const response = await fetch(`https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=${model}&make=${manufacture}&year=${year}&limit=${limit}&fuel_type=${fuel}`,{
        headers
    });
    const result = await response.json();
    if(result.length === 0){
        const dataWithId= result.map ((item:any)=>({...item,id:uuidv4()}))
        const dataWithCarRent = dataWithId.map ((item:any)=>(
            {...item,
            price: calculateCarRent(item.city_mpg, item.year)}))
        
        return dataWithCarRent;
    }
}

export const generateImageUrl = (car:CarProps , angle?:string)=>{
    const url=new URL("https://cdn.imagin.studio/getimage");
    const {make,model,year} = car;

    url.searchParams.append("customer", "hrjavascript-mastery");
    url.searchParams.append("make", make);
    url.searchParams.append("modelFamily", model.split(" ")[0]);
    url.searchParams.append("zoomType", "fullscreen");
    url.searchParams.append("modelYear", `${year}`);
    url.searchParams.append("angle", `${angle}`);

    return `${url}`
}
/*
export const getPhotosByQuery = async(query:string)=>{
    const clientId= process.env.UNSPLASH_CLIENT_ID;
    const unsplashURL = "https://api.unsplash.com"
    const data = await fetch (`${unsplashURL}/search/photos?query=${query}&client-id=${clientId}&per_page=1`);
    return data
}

export const getPhotos = async()=>{
    const clientId= process.env.FUEL_KEY;
    const fuelURL = "https://api.fuelapi.com/"
    const data = await fetch (`${fuelURL}/v1/json/vehicles/?make=porsche/?api_key=${clientId}`);
    return data
}
*/
