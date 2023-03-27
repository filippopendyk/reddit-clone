import { configureStore } from "@reduxjs/toolkit";
import { postsSliceReducer } from "./features/posts/postsSlice";
import { fetchMostPopularCategories, topCategoriesReducer } from "./features/topCategories/topCategoriesSlice";
import { filterSliceReducer } from "./features/filter/filterSlice";
import { currentPostSliceReducer } from "./features/currentPost/currentPostSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import { combineReducers } from "@reduxjs/toolkit";

const persistConfig = {
    key: 'root',
    version: 1,
    storage
};

const reducer = combineReducers({
    topCategories: topCategoriesReducer,
    posts: postsSliceReducer,
    filter: filterSliceReducer,
    currentPost: currentPostSliceReducer,
});

const persistedReducer = persistReducer(persistConfig, reducer);

const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

store.dispatch(fetchMostPopularCategories());

export default store;

// Define types for usedispatch and useselector

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;