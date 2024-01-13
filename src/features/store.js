import { configureStore } from "@reduxjs/toolkit";
import { userApi } from "./userApi";
import { blogApi } from "./blogApi";

export const store = configureStore({
  reducer: {
    [userApi.reducerPath]: userApi.reducer,
    [blogApi.reducerPath]: blogApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat([
      userApi.middleware,
      blogApi.middleware,
    ]);
  },
});
