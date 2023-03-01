import { createSlice } from "@reduxjs/toolkit";

type FilterState = {
    filter: string;
}

const initialState: FilterState = {
    filter: 'best',
}

const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setFilterAsBest(state){
            state.filter = 'best'
        },
        setFilterAsTop(state){
            state.filter = 'top'
        },
        setFilterAsNew(state){
            state.filter = 'new'
        },
        setFilterAsDefault(state){
            state.filter = 'best'
        }
    }
})

export const { setFilterAsBest, setFilterAsDefault, setFilterAsNew, setFilterAsTop} = filterSlice.actions;

export default filterSlice.reducer;