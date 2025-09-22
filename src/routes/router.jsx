import { createBrowserRouter } from "react-router";
import RootLayout from "../layout/RootLayout";
import Home from "../pages/Home/Home/Home";
import AuthLayout from "../layout/AuthLayout";
import Login from "../pages/Authentication/Login/Login";
import Register from "../pages/Authentication/Register/Register";
import Coverage from "../pages/Coverage/Coverage";
import SendParcel from "../pages/SendParcel/SendParcel";
import PrivateRoute from "../route/PrivateRoute";
import About from "../pages/About/About";
import DashboardLayout from "../layout/DashboardLayout";
import MyParcels from "../pages/Dashboard/MyParcels/MyParcels";
import Payment from "../pages/Dashboard/Payment/Payment";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "coverage",
        element: <Coverage />,
        loader: () => fetch("/serviceCenter.json"),
      },
      {
        path: "about",
        element: <About />,
        children: [
          {
            index: true,
            element: <p>Default Story...</p>,
          },
          {
            path: "story",
            element: <p>Default Story...</p>,
          },
          {
            path: "mission",
            element: <p>Mission Content...</p>,
          },
          {
            path: "success",
            element: <p>Mission Content...</p>,
          },
          {
            path: "team",
            element: <p>Mission Content...</p>,
          },
        ],
      },
      {
        path: "send",
        element: (
          <PrivateRoute>
            <SendParcel />
          </PrivateRoute>
        ),
        loader: () => fetch("/serviceCenter.json"),
      },
    ],
  },
  {
    path: "/",
    element: <AuthLayout />,
    children: [
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [
      {
        path: "myParcels",
        element: <MyParcels />,
      },
      {
        path: "payment/:id",
        Component: Payment,
      },
    ],
  },
]);
