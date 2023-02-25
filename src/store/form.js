import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpenModelUpdate: false,
};

export const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    openModelUpdate: (state, action) => {
      state.isOpenModelUpdate =
        state.isOpenModelUpdate === false ? true : false;
      console.log(state.isOpenModelUpdate);
    },
  },
});

export const { openModelUpdate } = formSlice.actions;
export default formSlice.reducer;
