
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './containers/Dashboard';
import Rate from './containers/Rate';
import Profile from './containers/Profile';
import Auth from './containers/Auth';
import AdminDashboard from './containers/AdminDashboard';
import AdminUsers from './containers/AdminUsers';
import AdminUsersShow from './containers/AdminUsersShow';

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/dashboard" element={<Dashboard />} exact />
      <Route path="/rate" element={<Rate />} />
      <Route path="/rate/:userId" element={<Rate />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/profile/update" element={<Profile />} />
      <Route path="/auth/login" element={<Auth />} />
      <Route path="/auth/signup" element={<Auth />} />
      <Route path="/admin/dashboard" element={<AdminDashboard />} />
      <Route path="/admin/users" element={<AdminUsers />} />
      <Route path="/admin/users/:id" element={<AdminUsersShow exact />} />
    </Routes>
  </BrowserRouter>
);

export default Router;
