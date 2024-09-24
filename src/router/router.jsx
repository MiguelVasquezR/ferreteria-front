import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ViewMain from "../view/viewMain/ViewMain.jsx";
import ViewLogin from "../view/viewLogin/ViewLogin.jsx";
import ViewForgetPassword from "../view/viewForgetPassword/ViewForgetPassword.jsx";
import ViewForgetPasswordAction from "../view/viewForgetPassword/viewForgetPasswordAction/ViewForgetPasswordAction.jsx";
import ProtectedRoute from "./ProtecterRoute.jsx";
import ViewEditProduct from "../view/viewProduct/viewEditProduct/ViewEditProduct.jsx";
import ViewCreateProduct from "../view/viewProduct/viewCreateProduct/ViewCreateProduct.jsx";

/*
  Según la lógica de negocio, tendremos 3 interfaces diferentes segun los roles, entonces debemos de validar
  que el usuario quiere ingresar al sistema tenga el permiso de entrar a esa pestalla. He creado el componente 
  ProtectedRouter que se encarga de validar si existen token y rol en nuestro localstorage, si no exiten este se encarga
  de redirigir al login, pero si los tiene, valida que el rol almacenado en nuestrol local sea igual al rol requerido
  
  pd -> En el caso de que no se requiera un rol, solo poner el componente dentro de la prop element

*/

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
  {
    path: "*",
    element: <div>Ruta no encontrada</div>,
  },
  {
    path: "/login",
    element: <ViewLogin />,
  },
  {
    path: "/forget-password",
    element: <ViewForgetPassword />,
  },
  {
    path: "/forget-password-action",
    element: <ViewForgetPasswordAction />,
  },
  {
    path: "/edit-product",
    element: <ViewEditProduct />
  },
  {
    path: "/home",
    element: <ProtectedRoute element={<ViewMain />} requiredRole="admin" />,
  },
  {
    path: "/create-product",
    element: <ViewCreateProduct />
  }
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
