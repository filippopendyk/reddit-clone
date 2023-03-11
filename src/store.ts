import { configureStore } from "@reduxjs/toolkit";
import { postsSliceReducer } from "./features/posts/postsSlice";
import { fetchMostPopularCategories, topCategoriesReducer } from "./features/topCategories/topCategoriesSlice";
import { filterSliceReducer } from "./features/filter/filterSlice";
import { currentSubredditReducer } from "./features/currentSubreddit/currentSubredditSlice";

const store = configureStore({
    reducer: {
        topCategories: topCategoriesReducer,
        posts: postsSliceReducer,
        filter: filterSliceReducer,
        post: postsSliceReducer,
        currentSubreddit: currentSubredditReducer
    },
});

store.dispatch(fetchMostPopularCategories());

export default store;

// Define types for usedispatch and useselector

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;