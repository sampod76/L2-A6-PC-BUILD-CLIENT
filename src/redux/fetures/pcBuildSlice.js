import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  total: 0,
};

const pcSlice = createSlice({
  name: "pcBuilt",
  initialState: initialState,
  reducers: {
    addToPcBuilt: (state, action) => {
      const existingProduct = state.products.find(
        (product) => product.category === action.payload.category
      );
      if (existingProduct) {
      } else {
        state.products.push({ ...action.payload });
      }
      state.total += action.payload.price;
    },

    removeOne: (state, action) => {
      const existingProduct = state.products.find(
        (product) => product.category === action.payload.category
      );
      if (existingProduct) {
        state.total -= action.payload.price;

        state.products = state.products.filter(
          (product) => product.category !== action.payload.category
        );
      }
    },
  },
});

export const { addToPcBuilt, removeOne } = pcSlice.actions;

export default pcSlice.reducer;
