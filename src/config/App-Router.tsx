import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import BaseAuthLayout from '../features/USER/auth/component/Base-Auth-Layout';
import Login from '../features/USER/auth/login/component/Login';
import Register from '../features/USER/auth/register/component/Register';
import BaseLayout from '../features/USER/base-layout/component/Base-Layout';
import Home from '../features/USER/home/component/Home';
import LandingPage from '../features/USER/landing-page/component/Landing-Page';
import Profile from '../features/USER/profile/component/Profile';
import EditProfile from '../features/USER/profile/component/EditProfile';
import { useAppDispatch } from '../stores/stores';

import React from 'react';
import { checkAuth } from '../stores/auth/async';

export default function AppRouter() {
  const dispatch = useAppDispatch();
  React.useEffect(() => {
    dispatch(checkAuth());
  }, []);
  return <AppRouterLink />;
}

export function AppRouterLink() {
  const router = createBrowserRouter([
    // {
    //   path: '/admin',
    //   element: <AdminBaseLayout></AdminBaseLayout>,
    //   children: [
    //     { path: '/admin', element: <Home></Home> },
    //     { path: '/admin/product', element: <AdminProduct></AdminProduct> },
    //     { path: '/admin/category', element: <AdminCategory></AdminCategory> },
    //   ],
    // },
    {
      path: '/',
      element: <BaseAuthLayout />,
      children: [
        { path: '', element: <LandingPage /> },
        { path: '/login', element: <Login /> },
        { path: '/register', element: <Register /> },
      ],
    },
    {
      path: '/',
      element: <BaseLayout></BaseLayout>,
      children: [
        { path: '/home', element: <Home></Home> },
        { path: '/profile', element: <Profile></Profile> },
        { path: '/profile/edit', element: <EditProfile /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}
