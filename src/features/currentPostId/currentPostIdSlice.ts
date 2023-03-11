import { createSlice } from "@reduxjs/toolkit";

type CurrentPostIdState = {
    currentPostId: string;
}

const initialState: CurrentPostIdState = {
    currentPostId: '',
}

const currentPostIdSlice = createSlice({
    name: 'currentPostId',
    initialState,
    reducers: {
        resetCurrentPostId(state){
            state.currentPostId = '';
        },
        setCurrentPostIdAs(state, action){
            state.currentPostId = action.payload;
        }
    }
})

export const { resetCurrentPostId, setCurrentPostIdAs } = currentPostIdSlice.actions;
export const { reducer: currentPostIdReducer } = currentPostIdSlice;