import { userConstants } from '../../constants/user.constants';

const initialState = {};

export function authentication(state = initialState, action) {
  switch (action.type) {
    case userConstants.LOGIN_REQUEST:
      return {
        ...state,
        loggingIn: true,
        user: action.user
      };
    case userConstants.LOGIN_SUCCESS:
      return {
        ...state,
        loggedIn: true,
        loggingIn: false,
        user: action.user
      };
    case userConstants.LOGIN_FAILURE:
    case userConstants.LOGOUT:
      return {};
    case userConstants.GET_ME_REQUEST: 
      return {
        ...state,
        checkedUser: false,
        checkingUser: true
      };
    case userConstants.GET_ME_SUCCESS: 
      return {
        ...state,
        checkingUser: false,
        checkedUser: true,
        user: action
      }
    case userConstants.GET_ME_FAILURE:
        return {
          ...state,
          loggedIn:  false,
          user: {}
        }
    default:
      return state
  }
}