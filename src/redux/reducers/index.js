import { combineReducers } from 'redux';
import { authentication } from './authentication.reducer';
import { todos } from './todos.reducer';
import { alert } from './alert.reducer';

const rootReducer = combineReducers({
  authentication,
  todos,
  alert
});

export default rootReducer;