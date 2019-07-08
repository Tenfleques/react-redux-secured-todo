import { combineReducers } from 'redux';
import { authentication } from './authentication.reducer';
import { todos } from './todos.reducer';
import { alert } from './alert.reducer';
import { users } from './users.reducer';


const rootReducer = combineReducers({
  authentication,
  todos,
  users,
  alert
});

export default rootReducer;