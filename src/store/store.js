import { configureStore } from "@reduxjs/toolkit";
import { HomeSliceReducers } from "./slice/HomeSlice";

export const store = configureStore({
    reducer: {
        homePageContent: HomeSliceReducers,
    }
})