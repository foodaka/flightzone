import {
  HANDLE_WHERE_TO_INPUT,
  FETCH_FLIGHTS_SUCCESS,
  FETCH_FLIGHTS
} from './constants';


import Immutable from 'immutable';

const initialState = Immutable.fromJS({
  destination: '',
  tripOptions:[],
  isLoading:false
});

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case HANDLE_WHERE_TO_INPUT: {
      return state
                .set('destination', Immutable.fromJS(action.payload));
    }

    case FETCH_FLIGHTS:{
      return state
                .set('isLoading', true)
    }

    case FETCH_FLIGHTS_SUCCESS : {
      return state
                .set('tripOptions', Immutable.fromJS(action.payload))
                .set('isLoading', false);
    }
    default: return state;
  }
}
