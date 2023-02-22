import { FLIGHTADD } from "./actionType";
import { FLIGHTDELETE } from "./actionType";
export const flightadd=(flightDetails)=>
{
    return{
        type:FLIGHTADD,
        payload:flightDetails
    }
}
export const flightchange=(value)=>
{
    return{
        type:FLIGHTCHANGE,
        payload:value
    }
}
export const flightdelete=(value)=>
{
    return{
        type:FLIGHTDELETE,
        payload:value
    }
}