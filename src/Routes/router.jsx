import { createBrowserRouter } from "react-router-dom";
import Login from "../Pages/Login";
import Signup from "../Pages/Signup";
import Home from "../Pages/Home";
import Network from "../Pages/Network";
import Jobs from "../Pages/Jobs";
import Messaging from "../Pages/Messaging";
import Notifications from "../Pages/Notifications";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/network",
    element: <Network />,
  },
  {
    path: "/jobs",
    element: <Jobs />,
  },
  {
    path: "/messaging",
    element: <Messaging />,
  },
  {
    path: "/notifications",
    element: <Notifications />,
  },
]);
