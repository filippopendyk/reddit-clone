import { createSlice } from "@reduxjs/toolkit";

export interface topCategory{
    name: string;
}

interface TopCategoriesState {
    topCategories: topCategory[];
}

const initialState: TopCategoriesState={
    topCategories: []
};

export const TopCategoriesSlice = createSlice({
    name: 'topCategories',
    initialState,
    reducers: {
        
    }
})