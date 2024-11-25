import { createBrowserRouter, RouterProvider } from "react-router-dom";

import BaseLayout from "../features/USER/base-layout/component/Base-Layout";
import Home from "../features/USER/home/component/Home";
import BaseAuthLayout from "../features/USER/auth/component/Base-Auth-Layout";
import Login from "../features/USER/auth/login/component/Login";
import Register from "../features/USER/auth/register/component/Register";
import LandingPage from "../features/USER/landing-page/component/Landing-Page";

export default function AppRouter() {
  const router = createBrowserRouter([
    // {
    //   path: "/admin",
    //   element: <AdminBaseLayout></AdminBaseLayout>,
    //   children: [
    //     { path: "/admin", element: <Home></Home> },
    //     { path: "/admin/product", element: <AdminProduct></AdminProduct> },
    //     { path: "/admin/category", element: <AdminCategory></AdminCategory> },
    //   ],
    // },
    {
      path: "/",
      element: <BaseAuthLayout />,
      children: [
        { path: "", element: <LandingPage /> },
        { path: "/login", element: <Login /> },
        { path: "/register", element: <Register /> },
      ],
    },
    {
      path: "/",
      element: <BaseLayout></BaseLayout>,
      children: [
        { path: "/home", element: <Home></Home> },
        // { path: "/complain", element: <ChatComponent></ChatComponent> },
        // { path: "/profile/:name", element: <Profile></Profile> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}
