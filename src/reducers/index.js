import { exercises } from './exercises';
import { ui } from './ui';
import { currentWorkout } from './currentWorkout';
import { combineReducers } from 'redux';
import welcomeReducer from '../containers/Welcome/reducer'

export default combineReducers({
  welcomeReducer
});
