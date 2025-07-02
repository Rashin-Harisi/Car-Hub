import { sumPrice, sumQuantity } from "@/utils/functions"
import { createSlice } from "@reduxjs/toolkit"

export interface CarProps {
    city_mpg: number;
    class: string;
    combination_mpg: number;
    cylinders: number;
    displacement: number;
    drive: string;
    fuel_type: string;
    highway_mpg: number;
    make: string;
    model: string;
    transmission: string;
    year: number;
    id : string ;
    price: string;
    quantity: number;
}

const initialState= {
    selectedCars:[] as CarProps[],
    dayCounters: 0,
    total:0,
    checkout: false,
    next: false,
}

const cartSlice= createSlice({
    name: "cart",
    initialState,
    reducers:{
        addItem:(state,action)=>{
            if ( !state.selectedCars.find((item : any) => item.id === action.payload.id)){
                state.selectedCars.push({...action.payload, quantity: 1})
                state.checkout= false 
                state.dayCounters = sumQuantity(state.selectedCars)
                state.total= sumPrice(state.selectedCars) 
                state.next=false              
                }
        },
        removeItem:(state,action)=>{
            const newSelectedCars= state.selectedCars.filter((item:any)=>item.id !== action.payload.id)
            state.selectedCars= newSelectedCars
            state.dayCounters= sumQuantity(state.selectedCars)
            state.total= sumPrice(state.selectedCars)
            state.checkout= false
            state.next=false
        },
        increase:(state,action)=>{
            const increaseIndex= state.selectedCars.findIndex((item : any)=>item.id === action.payload.id)
            state.selectedCars[increaseIndex].quantity++
            state.dayCounters= sumQuantity(state.selectedCars)
            state.total= sumPrice(state.selectedCars)
            state.checkout= false
            state.next=false
        },
        decrease:(state,action)=>{
            const decreaseIndex= state.selectedCars.findIndex((item : any)=>item.id === action.payload.id)
            state.selectedCars[decreaseIndex].quantity--
            state.dayCounters= sumQuantity(state.selectedCars)
            state.total= sumPrice(state.selectedCars)
            state.checkout= false
            state.next=false
        },
        details : (state) =>{
            state.checkout= false
            state.next= true
        },
        checkout: (state)=>{
            state.selectedCars= []
            state.dayCounters= 0
            state.total = 0
            state.checkout = true
            state.next=false
        },
    }
})


export const cartReducer= cartSlice.reducer
export const {addItem,removeItem,increase,decrease,details,checkout} = cartSlice.actions