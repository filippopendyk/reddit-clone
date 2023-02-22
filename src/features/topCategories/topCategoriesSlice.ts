import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { build } from "vite";

interface RedditCategory {
    name: string;
}

interface RedditApiResponse {
    data: {
        children: {
            data: RedditCategory;
        }[];
    };
}

interface FetchMostPopularCategoriesPayload {
    categories: RedditCategory[];
}

export const fetchMostPopularCategories = createAsyncThunk<FetchMostPopularCategoriesPayload, void, {}>(
    'topCategories/fetchMostPopularCategories', async () => {
        try{
            //Fetch the most popular categories from Reddit API
            const response = await fetch('https://www.reddit.com/reddits.json');
            const data: RedditApiResponse = await response.json();
            
            //Parse the response data
            const categories = data.data.children.map((child) => child.data);

            return { categories };
        } catch (err) {
            throw new Error('failed to fetch categories');
        }
    }
);

interface TopCategoriesState {
    loading: boolean;
    error: string | undefined;
    data: RedditCategory[];
}

const initialState: TopCategoriesState = {
    loading: false,
    error: undefined,
    data: [],
}

const topCategoriesSlice = createSlice({
    name: 'topCategories',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchMostPopularCategories.pending, (state) => {
            state.loading = true;
            state.error = undefined;
        });
        builder.addCase(fetchMostPopularCategories.fulfilled, (state, action: PayloadAction<FetchMostPopularCategoriesPayload>) => {
            state.loading = false;
            state.data = action.payload.categories;
        });
        builder.addCase(fetchMostPopularCategories.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        })
    }
})

// Export the topCategories slice and the fetchTopCategories async thunk

export const { reducer: topCategoriesReducer } = topCategoriesSlice;