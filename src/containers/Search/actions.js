import {
  HANDLE_WHERE_TO_INPUT,
  FETCH_FLIGHTS,
  FETCH_FLIGHTS_SUCCESS,
} from './constants';

import API_KEY from '../../../keys/api.json';
import axios from 'axios';


export function handleWhereto(text){
  return (dispatch) => {
    dispatch({ type: HANDLE_WHERE_TO_INPUT, payload: text })
  };
}


export function fetchFlights(){
  return (dispatch,getState) => {

    dispatch({type:FETCH_FLIGHTS})

    let destination = getState().SearchReducer.get('destination')
    fetch(`https://www.googleapis.com/qpxExpress/v1/trips/search?key=${API_KEY.dev}`, {
      method:'post',
      headers: {'Accept': 'application/json', 'Content-Type':'application/json'},
      body:JSON.stringify({
      "request": {
        "passengers": {
          "kind": "qpxexpress#passengerCounts",
          "adultCount": 1,
          "childCount": 1,
          "infantInLapCount": 0,
          "infantInSeatCount": 0,
          "seniorCount": 0
        },
        "slice": [
          {
            "kind": "qpxexpress#sliceInput",
            "origin": "TPE",
            "destination": `${destination}`,
            "date": "2016-12-19",
            "maxStops": 3,
            "maxConnectionDuration": null,
            "preferredCabin": "",
            "permittedDepartureTime": {
              "kind": "qpxexpress#timeOfDayRange",
              "earliestTime": "",
              "latestTime": ""
            },
            "permittedCarrier": [

            ],
            "alliance": "",
            "prohibitedCarrier": [

            ]
          }
        ],
        "maxPrice": "",
        "saleCountry": "",
        "ticketingCountry": "",
        "refundable": false,
        "solutions": 5
      }
    })
  }).then(res=>res.json())
    .then(res =>{
      dispatch({type:FETCH_FLIGHTS_SUCCESS,payload:res.trips.tripOption})
      console.log('res',res);})
    .catch(err=> { console.log('err', err );})
  }
}
