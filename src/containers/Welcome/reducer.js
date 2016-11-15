
import {
  FETCH_FLIGHTS,
  FETCH_FLIGHTS_SUCCESS,
  FLIP
} from './constants';

import Immutable from 'immutable';

const initialState = Immutable.fromJS({
  isLoading:false,
  data:[]
})

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_FLIGHTS: {
      return state
              .set('isLoading', true);
    }
    case FETCH_FLIGHTS_SUCCESS: {
      return state
                .set('isLoading', false);
    }

    case FLIP :{
    state = state.update('isLoading', v => !v)
    return state
    }
    default: return state;
  }
}
