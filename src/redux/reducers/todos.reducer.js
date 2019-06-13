import { userConstants } from '../../constants/user.constants';

export function todos(state = [], action) {
  switch (action.type) {
    case userConstants.ADD_TODO_SUCCESS:
      return  [
        action.todo,
        ...state
    ]
    case userConstants.DELETE_TODO_SUCCESS:
      return state.filter(todo => todo.id !== action.id)
    case userConstants.EDIT_TODO_SUCCESS:
        return state.map(todo => todo.id === action.todo.id? action.todo : todo )
    case userConstants.GET_TODOS_REQUEST:
      return {
        loading: true
      };
    case userConstants.GET_TODOS_SUCCESS:
      return action.todos
    case userConstants.GET_TODOS_FAILURE:
      return { 
        error: action.error
      };
    default:
      return state
  }
}