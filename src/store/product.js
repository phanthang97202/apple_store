import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: "",
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    detailProduct: (state, action) => {
      state.id = action.payload.idProduct;
    },
  },
});

export const { detailProduct } = productSlice.actions;
export default productSlice.reducer;
