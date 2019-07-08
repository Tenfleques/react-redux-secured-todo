import { userConstants } from '../../constants/user.constants';

export function users(state = [], action) {
  switch (action.type) {
    case userConstants.GET_USERS_REQUEST:
      return {
        loadingUsers: true
      };
    case userConstants.GET_USERS_SUCCESS:
      return action.users
    case userConstants.GET_USERS_FAILURE:
      return { 
        error: action.error
      };
    default:
      return state
  }
}