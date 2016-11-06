import {
  FETCH_FLIGHTS,
  FETCH_FLIGHTS_SUCCESS
} from './constants';

import axios from 'axios';
export function fetchFlights(){
  return (dispatch) => {

    console.log('here?');
   axios.request({
      method:'post',
      headers: {
        'Accept': 'application/json'
      },
      body:{
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
      }
    }).then(res => {console.log('res',res);})
  };
}

// fetch('https://www.googleapis.com/qpxExpress/v1/trips/search?key=AIzaSyBxWKXLUzVFVzmTZ_kypJQFcDqID9JdPOs', {
//   method:'post',
//   headers: {
//     'Accept': 'application/json'
//   },
//     body:JSON.stringify({
//       "request": {
//   "passengers": {
//     "kind": "qpxexpress#passengerCounts",
//     "adultCount": 1,
//     "childCount": 1,
//     "infantInLapCount": 0,
//     "infantInSeatCount": 0,
//     "seniorCount": 0
//   },
//   "slice": [
//     {
//       "kind": "qpxexpress#sliceInput",
//       "origin": "TPE",
//       "destination": "YYZ",
//       "date": "2016-11-19",
//       "maxStops": 3,
//       "maxConnectionDuration": null,
//       "preferredCabin": "",
//       "permittedDepartureTime": {
//         "kind": "qpxexpress#timeOfDayRange",
//         "earliestTime": "",
//         "latestTime": ""
//       },
//       "permittedCarrier": [
//
//       ],
//       "alliance": "",
//       "prohibitedCarrier": [
//
//       ]
//     }
//   ],
//   "maxPrice": "",
//   "saleCountry": "",
//   "ticketingCountry": "",
//   "refundable": false,
//   "solutions": 5
// }
//     })
//   }).then(res=>{console.log('res',res); })
//     .catch(err=> { console.log('err', err );})
//   }
// }
