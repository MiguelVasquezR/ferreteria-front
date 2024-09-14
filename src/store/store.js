import { configureStore } from "@reduxjs/toolkit";
import proveedor_reducers from "./slices/proveedor/proveedor_reducers";
import photo_reducers from "./slices/photo/photo_reducer";

export const store = configureStore({
  reducer: {
    proveedores: proveedor_reducers,
    photo: photo_reducers,
  },
});
