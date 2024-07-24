import { sumPrice, sumQuantity } from "@/utils/functions"
import { createSlice } from "@reduxjs/toolkit"



const initialState= {
    selectedCars:[],
    dayCounters: 0,
    total:0,
    checkout: false,
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
                }
        },
        removeItem:(state,action)=>{
            const newSelectedCars= state.selectedCars.filter((item:any)=>item.id !== action.payload.id)
            state.selectedCars= newSelectedCars
            state.dayCounters= sumQuantity(state.selectedCars)
            state.total= sumPrice(state.selectedCars)
            state.checkout= false
        },
        increase:(state,action)=>{
            const increaseIndex= state.selectedCars.findIndex((item : any)=>item.id === action.payload.id)
            state.selectedCars[increaseIndex].quantity++
            state.dayCounters= sumQuantity(state.selectedCars)
            state.total= sumPrice(state.selectedCars)
            state.checkout= false
        },
        decrease:(state,action)=>{
            const decreaseIndex= state.selectedCars.findIndex((item : any)=>item.id === action.payload.id)
            state.selectedCars[decreaseIndex].quantity--
            state.dayCounters= sumQuantity(state.selectedCars)
            state.total= sumPrice(state.selectedCars)
            state.checkout= false
        },
        checkout: (state)=>{
            state.selectedCars= []
            state.dayCounters= 0
            state.total = 0
            state.checkout = true
        },
    }
})


export const cartReducer= cartSlice.reducer
export const {addItem,removeItem,increase,decrease,checkout} = cartSlice.actions