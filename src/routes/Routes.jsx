import { createBrowserRouter } from "react-router";
import Root from "../pages/Root";
import ErrorPage from "../pages/ErrorPage";
import Home from "../components/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    element: <ErrorPage />,
    children: [
      {
        index: true,
        path: "/",
        Component: Home,
      },
    ],
  },
]);
