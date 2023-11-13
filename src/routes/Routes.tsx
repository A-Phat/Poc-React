import ProtectedRoutes from "../provider/ProtectedRoutes";
import Home from "../pages/Home";
import Login from "../pages/Login";
// import About from "../pages/About";
// import App from "../App";
import Admin from "../layouts/Admin";
import Errorpage from "../pages/Errorpage";
import Dashboard from "../pages/admins/Dashboard/Dashboard";
// import ListDashboard from "../pages/admins/Dashboard/ListDashboard";

export const routes = [
  {
    element: <ProtectedRoutes />,
    children: [
      {
        // path: "/",
        index: true,
        element: <Home />,
      },
      {
        path: "/admin",
        element: <Admin />,
        children: [
          {
            path: "dashboard",
            element: <Dashboard />,
          },
          // {
          //   path: "dashboard/:id",
          //   element: <Dashboard />,
          // },
        ],
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "*",
    element: <Errorpage />,
  },
];
