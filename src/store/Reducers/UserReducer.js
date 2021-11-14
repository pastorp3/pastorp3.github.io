import { LOG_IN, SIGN_UP, GET_USER, AUTH_ERROR, RETURN_USER } from '../actions/type';

const userReducer = (state = {}, action) => {
  switch (action.type) {
    case LOG_IN:
      console.log('LogIn', action)
      return action.payload;
    case GET_USER:
        return action.payload;
    case SIGN_UP:
        console.log("SignUp")
      return true;
    case AUTH_ERROR:
      return {
        error: action.payload
      };
    case RETURN_USER:
      return state;
    default:
      return state;
  }
};

export default userReducer;