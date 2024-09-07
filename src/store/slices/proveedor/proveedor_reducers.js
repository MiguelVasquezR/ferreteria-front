import { createSlice } from "@reduxjs/toolkit";

const status = {
  idle: "idle",
  loading: "loading",
  succeeded: "succeeded",
  error: "error",
};

const initialState = {
  proveedores: [],
  status: status.idle,
};

const proveedorSlice = createSlice({
  name: "proveedores",
  initialState,
  reducers: {
    actualizarProveedores(state, action) {
      state.proveedores = action.payload;
    },
    actualizarStatus(state, action) {
      state.status = action.payload;
    },
  },
});

export const { todoAdded, todoToggled } = proveedorSlice.actions;
export default proveedorSlice.reducer;
