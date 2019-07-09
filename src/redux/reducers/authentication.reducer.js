import { userConstants } from '../../constants/user.constants';

const initialState = {
  checkedUser : false
};
export function authentication(state = initialState, action) {
  switch (action.type) {
    case userConstants.LOGIN_REQUEST:
      return {
        loggingIn: true,
        checkedUser:  true,
        user: action.user
      };
    case userConstants.LOGIN_SUCCESS:
      return {
        loggedIn: true,
        loggingIn: false,
        checkedUser:  true,
        user: action.user
      };
    case userConstants.LOGIN_FAILURE:
      return {
        loggedIn: false,
        loggingIn: false,
        checkedUser: true,
        error : action.error 
      };
    case userConstants.LOGOUT_SUCCESS:
    case userConstants.LOGIN_FAILURE:
      state = {};
      return {
        loggedIn: false,
        loggingIn: false,
        checkedUser: true,
        user : {}
      };
    case userConstants.GET_ME_REQUEST: 
      return {
        checkingUser: true
      };
    case userConstants.GET_ME_SUCCESS: 
      return {
        checkingUser: false,
        checkedUser: true,
        user: action.user
      }
    case userConstants.GET_ME_FAILURE:
        return {
          checkingUser: false,
          checkedUser: true,
          user: {},
          error : action.error
        }
    default:
      return state
  }
}