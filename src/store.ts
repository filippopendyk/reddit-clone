import { configureStore } from "@reduxjs/toolkit";
import { fetchMostPopularCategories, topCategoriesReducer } from "./features/topCategories/topCategoriesSlice";
import topicSlice from "./features/topic/topicSlice";

const store = configureStore({
    reducer: {
        topCategories: topCategoriesReducer,
        topic: topicSlice,
    },
});

store.dispatch(fetchMostPopularCategories());

export default store;

// Define types for usedispatch and useselector

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;