import { configureStore } from "@reduxjs/toolkit";

import proveedor_reducers from "./slices/proveedor/proveedor_reducers";
import product_reducers from "./slices/product/product_reducers";
import project_reducer from "./slices/project/project_reducers";
import package_reducer from "./slices/package/package_reducers";

export const store = configureStore({
  reducer: {
    proveedores: proveedor_reducers,
    productos: product_reducers,
    proyectos: project_reducer,
    paquetes: package_reducer,
  },
});
