import { createSlice } from "@reduxjs/toolkit";
import { RedditPost } from "../posts/postsSlice";
import { PayloadAction } from "@reduxjs/toolkit";

type CurrentPostSlice = {
    currentPost: RedditPost | {};
}

type SetCurrentPostAsPayload = {
    currentPost: RedditPost;
}

const initialState: CurrentPostSlice = {
    currentPost: {}
};


const currentPostSlice = ({
    name: 'currentPost',
    initialState,
    reducers: {
        resetCurrentPost(state: any){
            state.currentPost = null;
        },
        setCurrentPostAs(state: any, action: PayloadAction<SetCurrentPostAsPayload>){
            state.currentPost = action.payload;
        }
    }
})