import { combineReducers } from 'redux';
import UserReducer from './UserReducer';
import DepartmentReducer from './DepartmentReducer';
import AdminUsersReducer from './AdminUsersReducer';

const RootReducer = combineReducers({
  user: UserReducer,
  departments: DepartmentReducer,
  adminUsers: AdminUsersReducer
});

export default RootReducer;