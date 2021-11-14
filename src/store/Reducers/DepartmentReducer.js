import { GET_DEPARTMENTS } from '../actions/type';

const departmentReducer = (state = [], action) => {
  switch (action.type) {
    case GET_DEPARTMENTS:
      console.log('LogIn', action)
      return action.payload;
    default:
      return state;
  }
};

export default departmentReducer;