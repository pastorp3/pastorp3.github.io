import { GET_USERS } from '../actions/type';

const adminUsersReducer = (state = [], action) => {
  switch (action.type) {
    case GET_USERS:
      return action.payload;
    default:
      return state;
  }
};

export default adminUsersReducer;