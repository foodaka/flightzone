// import { ui } from './ui';
import { combineReducers } from 'redux';
import welcomeReducer from '../containers/Welcome/reducer';
import SearchReducer from '../containers/Search/reducer';


export default combineReducers({
  welcomeReducer,
  SearchReducer
});
