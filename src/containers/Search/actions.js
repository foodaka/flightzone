import {
  HANDLE_WHERE_TO_INPUT
} from './constants';


export function handleWhereto(e){
  return (dispatch) => {
    dispatch({ type: HANDLE_WHERE_TO_INPUT, payload: e.target.value })
  };
}
