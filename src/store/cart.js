import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setAddProduct: (state, action) => {
      const existingProduct = state.products.find((product) => {
        return product.id === action.payload.id;
      });
      if (existingProduct) {
        const id = action.payload.id;
        state.products = state.products.map((product) => {
          const quantity = action.payload.quantity;
          const totalmoney =
            quantity * (existingProduct.sale || existingProduct.price);
          return product.id === id
            ? { ...product, quantity, totalmoney }
            : product;
        });
      } else {
        state.products.push(action.payload);
      }
    },
    deleteProductOnCart: (state, action) => {
      let indexItem = state.products.findIndex(
        (product) => product.id === action.payload.idProductCart
      );
      state.products.splice(indexItem, 1);
    },
  },
});

export const { setAddProduct, deleteProductOnCart } = cartSlice.actions;
export default cartSlice.reducer;
