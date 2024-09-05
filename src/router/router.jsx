import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import ViewMain from "../view/viewMain/ViewMain.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div >Hello world!</div>,
  },
  {
    path: "/hola",
    element: <ViewMain />,
  },
]);

const Router = () => {
  return <RouterProvider router={router} />;
}

export default Router;