import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";



type PostState = {
    isLoading: boolean;
    error: string | null;
    data: {};
};

const initialState: PostState = {
    isLoading: false,
    error: null,
    data: {}
};