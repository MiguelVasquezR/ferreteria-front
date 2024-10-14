import { configureStore } from "@reduxjs/toolkit";

import proveedor_reducers from "./slices/proveedor/proveedor_reducers";
import product_reducers from "./slices/product/product_reducers";

export const store = configureStore({
  reducer: {
    proveedores: proveedor_reducers,
    productos: product_reducers,
  },
});
