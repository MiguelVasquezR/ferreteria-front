import { configureStore } from "@reduxjs/toolkit";
import proveedor_reducers from "./slices/proveedor/proveedor_reducers";

export const store = configureStore({
  reducer: {
    proveedores: proveedor_reducers,
  },
});
