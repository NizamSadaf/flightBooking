import React, { useState } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { flightadd } from '../redux/flightBook/action'
const Flights_input = () => {
  const [disable,setDisable]=useState(false)
  const dispatch=useDispatch()
  const fullState=useSelector((state)=>state)
  const removeInitialState=fullState.filter((item)=>{
    if(item.id!==0){
      return item
    }
  })
  const receiveHandler=(e)=>
  { 
    e.preventDefault()
    if(removeInitialState.length!==3){
      const destinationFrom=e.target["from"].value
      const destinationTo=e.target["to"].value
      const journeyDate=e.target["date"].value
      const guestsNo=e.target["guests"].value
      const flightClass=e.target["ticketClass"].value
      const flightDetails={
      id:Math.floor(Math.random()*1000)+1,
      destinationFrom:destinationFrom,
      destinationTo:destinationTo,
      journeyDate:journeyDate,
      guestsNo:guestsNo,
      flightClass:flightClass,
    }
      dispatch(flightadd(flightDetails))
    }
      else {
        setDisable(!disable)
      }
      e.target["from"].value=""
      e.target["to"].value=""
      e.target["date"].value=""
      e.target["guests"].value=""
      e.target["ticketClass"].value=""
  }
  return (
    <div>
      <div class="mt-[160px] mx-4 md:mt-[160px] relative">
     <div class="bg-white rounded-md max-w-6xl w-full mx-auto">
       <form class="first-hero lws-inputform" name='flightForm' onSubmit={receiveHandler}>
         
         <div class="des-from">
           <p>Destination From</p>
           <div class="flex flex-row">
             <img src="./img/icons/Frame.svg" alt="" />
             <select class="outline-none px-2 py-2 w-full" name="from" id="lws-from" required>
               <option value="" hidden>Please Select</option>
               <option value="Dhaka">Dhaka</option>
               <option value="Sylhet">Sylhet</option>
               <option value="Saidpur">Saidpur</option>
               <option value="Cox's Bazar">Cox's Bazar</option>
             </select>
           </div>
         </div>
         <div class="des-from">
           <p>Destination To</p>
           <div class="flex flex-row">
             <img src="./img/icons/Frame.svg" alt="" />
             <select class="outline-none px-2 py-2 w-full" name="to" id="lws-to" required>
               <option value="" hidden>Please Select</option>
               <option>Dhaka</option>
               <option>Sylhet</option>
               <option>Saidpur</option>
               <option>Cox's Bazar</option>
             </select>
           </div>
         </div>
        <div class="des-from">
           <p>Journey Date</p>
           <input type="date" class="outline-none px-2 py-2 w-full date" name="date" id="lws-date" required />
         </div>
         <div class="des-from">
           <p>Guests</p>
           <div class="flex flex-row">
             <img src="./img/icons/Vector (1).svg" alt="" />
             <select class="outline-none px-2 py-2 w-full" name="guests" id="lws-guests" required>
               <option value="" hidden>Please Select</option>
               <option value="1">1 Person</option>
               <option value="2">2 Persons</option>
               <option value="3">3 Persons</option>
               <option value="4">4 Persons</option>
             </select>
           </div>
         </div>
         <div class="des-from !border-r-0">
           <p>Class</p>
           <div class="flex flex-row">
             <img src="./img/icons/Vector (3).svg" alt="" />
             <select class="outline-none px-2 py-2 w-full" name="ticketClass" id="lws-ticketClass" required>
               <option value="" hidden>Please Select</option>
               <option>Business</option>
               <option>Economy</option>
             </select>
           </div>
         </div>
         <button class="addCity" type="submit" id="lws-addCity" disabled={disable}>
           <svg width="15px" height="15px" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
             <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
           </svg>
           <span class="text-sm">Book</span>
         </button>
       </form>
     </div>
   </div>
    </div>
  )
}

export default Flights_input
