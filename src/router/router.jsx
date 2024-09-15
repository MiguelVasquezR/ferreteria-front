import { createBrowserRouter, RouterProvider } from "react-router-dom";

import ViewMain from "../view/viewMain/ViewMain.jsx";
import ViewLogin from "../view/viewLogin/ViewLogin.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
  {
    path: "/login",
    element: <ViewLogin />,
  },
  {
    path: "/home",
    element: <ViewMain />,
  },
]);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
