import { configureStore } from "@reduxjs/toolkit";
import filterSlice from "./features/filter/filterSlice";
import { postsSliceReducer } from "./features/posts/postsSlice";
import { fetchMostPopularCategories, topCategoriesReducer } from "./features/topCategories/topCategoriesSlice";

const store = configureStore({
    reducer: {
        topCategories: topCategoriesReducer,
        posts: postsSliceReducer,
        filter: filterSlice,
    },
});

store.dispatch(fetchMostPopularCategories());

export default store;

// Define types for usedispatch and useselector

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;