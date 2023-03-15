import { createSlice } from "@reduxjs/toolkit";
import { RedditPost } from "../posts/postsSlice";
import { PayloadAction } from "@reduxjs/toolkit";

type CurrentPostSlice = {
    currentPost: RedditPost | undefined;
}

type SetCurrentPostAsPayload = {
    currentPost: RedditPost;
}

const initialState: CurrentPostSlice = {
    currentPost: undefined,
};


const currentPostSlice = createSlice({
    name: 'currentPost',
    initialState,
    reducers: {
        resetCurrentPost(state){
            state.currentPost = undefined;
        },
        setCurrentPostAs(state, action: PayloadAction<SetCurrentPostAsPayload>){
            state.currentPost = action.payload.currentPost;
        }
    }
});

export const { resetCurrentPost, setCurrentPostAs } = currentPostSlice.actions;

export const { reducer: currentPostSliceReducer } = currentPostSlice;
