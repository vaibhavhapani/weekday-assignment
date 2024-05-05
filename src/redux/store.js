import { configureStore } from "@reduxjs/toolkit";
import jobsReducer from "./slices/jobSlice";
import filterReducer from "./slices/filterSlice";

export const store = configureStore({
    reducer: {
        jobs: jobsReducer,
        filter: filterReducer,
    }
})