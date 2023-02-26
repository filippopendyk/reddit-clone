import { configureStore } from "@reduxjs/toolkit";
import { fetchMostPopularCategories, topCategoriesReducer } from "./features/topCategories/topCategoriesSlice";

const store = configureStore({
    reducer: {
        topCategories: topCategoriesReducer,
    },
});

store.dispatch(fetchMostPopularCategories());

export default store;

// Define types for usedispatch and useselector

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;