
import {
  FETCH_FLIGHTS,
  FETCH_FLIGHTS_SUCCESS
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
    default: return state;
  }
}
