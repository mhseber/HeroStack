import { createBrowserRouter } from "react-router";
import Root from "../pages/Root";
import ErrorPage from "../pages/ErrorPage";
import Home from "../components/Home";
import Apps from "../components/Apps";
import Installation from "../components/Installation";
import AppDetails from "../pages/AppDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        path: "/",
        Component: Home,
      },
      {
        path: "apps",
        Component: Apps,
      },
      {
        path: "installation",
        Component: Installation,
      },
      {
        path: "appDetails/:id",
        Component: AppDetails,
      },
    ],
  },
]);
