import {
  HANDLE_WHERE_TO_INPUT
} from './constants';


import Immutable from 'immutable';

const initialState = Immutable.fromJS({
  goingTo:''
})

export default function reducer(state=initialState, action) {
  switch(action.type){
    case HANDLE_WHERE_TO_INPUT: {
      return state
                .set('goingTo', Immutable.fromJS(action.payload));
    }
    default: return state;
  }
}
