import { createSlice } from "@reduxjs/toolkit";
import { filterSliceReducer } from "../filter/filterSlice";

type currenSubredditState = {
    subreddit: string;
}

const initialState: currenSubredditState = {
    subreddit: '',
}

const currentSubredditSlice = createSlice({
    name: 'currentSubreddit',
    initialState,
    reducers: {
        resetCurrentSubreddit(state){
            state.subreddit = '';
        },
        setCurrentCategoryAs(state, action){
            state.subreddit = action.payload;
        }
    }
});

export const { resetCurrentSubreddit, setCurrentCategoryAs } = currentSubredditSlice.actions;

export const { reducer: currentSubredditReducer } = currentSubredditSlice;