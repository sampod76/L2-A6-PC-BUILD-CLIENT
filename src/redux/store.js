import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./api/api";
import builtPcSlice from "./fetures/pcBuildSlice";

export default configureStore({
reducer: {
    pcBuilt:builtPcSlice,
    [apiSlice.reducerPath]:apiSlice.reducer
},
middleware: getDefaultMiddleware =>
getDefaultMiddleware().concat(apiSlice.middleware)
});