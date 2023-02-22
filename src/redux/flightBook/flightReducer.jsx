import { FLIGHTADD } from "./actionType";
import { FLIGHTDELETE } from "./actionType";
const initialState=[
    {
        id:0,
        destinationFrom:"",
        destinationTo:"",
        journeyDate:"",
        guestsNo:"",
        flightClass:"",

    }
]
const flightReducer=(state=initialState,action)=>{
    switch(action.type){
        case FLIGHTADD:{
            return [...state,action.payload]
        }
        case FLIGHTDELETE:{
            
            return state.filter((item)=>item.id!==action.payload)
        }
        default:
            {
                return state
            }
    }
} 
export default flightReducer