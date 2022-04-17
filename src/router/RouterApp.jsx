import { Route, Routes } from 'react-router-dom';
import { Dashboard } from '../pages/dashboard/Dashboard';
import { Login } from '../pages/login/Login';

export const RouterApp = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />}></Route>
      <Route path="/" element={<Dashboard />}></Route>
    </Routes>
  );
};
