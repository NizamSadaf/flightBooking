import React from 'react'
import {createStore} from "redux"
import flightReducer from './flightBook/flightReducer'
const store=createStore(flightReducer)
export default store