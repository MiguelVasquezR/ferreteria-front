import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ViewMain from "../view/viewMain/ViewMain.jsx";
import ViewLogin from "../view/viewLogin/ViewLogin.jsx";
import ViewForgetPassword from "../view/viewForgetPassword/ViewForgetPassword.jsx";
import ViewForgetPasswordAction from "../view/viewForgetPassword/viewForgetPasswordAction/ViewForgetPasswordAction.jsx";
import ProtectedRoute from "./ProtecterRoute.jsx";
import ViewCreateProduct from "../view/viewProduct/viewCreateProduct/ViewCreateProduct.jsx";
import ViewProducts from "../view/viewProduct/ViewProduct.jsx";
import ViewListSuplier from "../view/viewSuplier/ViewListSuplier.jsx";
import ViewEditProduct from "../view/viewProduct/viewEditProduct/ViewEditProduct.jsx";
import ViewEditSuplier from "../view/viewSuplier/viewEditSuplier/ViewEditSuplier.jsx";
import ViewCreateSuplier from "../view/viewSuplier/viewCreateSuplier/viewCreateSuplier.jsx";
import ViewGenerateReport from "../view/viewGenerateReport/ViewGenerateReport.jsx";
import ViewReportDamageProduct from "../view/viewProduct/viewReportDamageProduct/ViewReportDamageProduct.jsx";
import ViewProcessPayment from "../view/viewProcessPayment/ViewProcessPayment.jsx";
import ViewSale from "../view/viewSale/ViewSale.jsx";
import ViewEditSale from "../view/viewSale/viewEditSale/ViewEditSale.jsx";
import ViewBuildingSite from "../view/viewBuildingSite/ViewBuildingSite.jsx";

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
    element: <ViewMain />,
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
    path: "/edit-product/:id",
    element: <ViewEditProduct />,
  },
  {
    path: "/home",
    element: <ProtectedRoute element={<ViewMain />} requiredRole="admin" />,
  },
  {
    path: "/edit-suplier/:id",
    element: <ViewEditSuplier />,
  },
  {
    path: "/create-product",
    element: <ViewCreateProduct />,
  },
  {
    path: "/products",
    element: <ViewProducts />,
  },

  { 
    path: "/supliers", 
    element: <ViewListSuplier /> },

  {
    path: "/create-suplier",
    element: <ViewCreateSuplier />,
  },

  {
    path: "/generate-report",
    element: <ViewGenerateReport/>
  },

  {
    path: "/report-damage-product",
    element: <ViewReportDamageProduct/>
  },

  {
    path: "/process-payment",
    element: <ViewProcessPayment/>
  },

  {
    path: "/sale",
    element: <ViewSale/>
  },

  {
    path: "/edit-sale",
    element: <ViewEditSale/>
  },
  
  {
    path: "/building-site",
    element: <ViewBuildingSite/>
  }

]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
