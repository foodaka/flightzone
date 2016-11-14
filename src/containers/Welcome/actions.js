import {
  FETCH_FLIGHTS,
  FETCH_FLIGHTS_SUCCESS
} from './constants';

import API_KEY from '../../../keys/api.json'
console.warn('key',API_KEY)
import axios from 'axios';
export function fetchFlights(){
  return (dispatch) => {

    dispatch({type:FETCH_FLIGHTS})

    fetch(`https://www.googleapis.com/qpxExpress/v1/trips/search?key=${API_KEY}`, {
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
            "destination": "YYZ",
            "date": "2016-11-19",
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
    .then(res =>{console.log('res',res);})
    .catch(err=> { console.log('err', err );})
  }
}
