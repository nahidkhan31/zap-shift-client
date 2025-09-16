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

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "coverage",
        Component: Coverage,
        loader: () => fetch("./serviceCenter.json"),
      },
      {
        path: "about",
        Component: About,
        children: [
          {
            index: true, // default tab -> story
            element: (
              <p>
                We started with a simple promise — to make parcel delivery fast,
                reliable, and stress-free. Over the years, our commitment to
                real-time tracking, efficient logistics, and customer-first
                service has made us a trusted partner for thousands.
              </p>
            ),
          },
          {
            path: "story",
            element: (
              <p>
                We started with a simple promise — to make parcel delivery fast,
                reliable, and stress-free. Over the years, our commitment to
                real-time tracking, efficient logistics, and customer-first
                service has made us a trusted partner for thousands.
              </p>
            ),
          },
          {
            path: "mission",
            element: (
              <p>
                Our mission is to revolutionize delivery by combining
                efficiency, transparency, and care. We aim to ensure every
                package, big or small, reaches safely and on time.
              </p>
            ),
          },
          {
            path: "success",
            element: (
              <p>
                Thousands of happy customers and countless successful deliveries
                speak for us. We continue to grow with innovation and trust at
                the core.
              </p>
            ),
          },
          {
            path: "team",
            element: (
              <p>
                Behind every delivery is a dedicated team working tirelessly.
                Together, we ensure seamless service, day after day.
              </p>
            ),
          },
        ],
      },
      {
        path: "send",
        element: (
          <PrivateRoute>
            <SendParcel></SendParcel>
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/",
    Component: AuthLayout,
    children: [
      {
        path: "login",
        Component: Login,
      },
      {
        path: "register",
        Component: Register,
      },
    ],
  },
]);
