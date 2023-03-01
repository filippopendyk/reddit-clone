import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

type RedditApiResponse = {
    data: {
        children: {
            data: {
                ups: number;
                created: number;
            }
        }[];
    }
};

export type RedditPost = {
    ups: number;
    created: number;
}

type FetchPostsPayload = {
    posts: RedditPost[];
    topic: string;
}

export const fetchPosts = createAsyncThunk<FetchPostsPayload, string>(
    'posts/fetchPosts', async(topic: string, thunkApi) => {
        try{
            //Fetch posts from specified category
            const response = await fetch(`https://www.reddit.com/r/${topic}.json`);
            const data: RedditApiResponse = await response.json();

            //Parse the response data
            const posts = data.data.children.map((child) => child.data);

            return { posts, topic };
        } catch (err) {
            throw new Error('failed to fetch posts');
        }
    }
)

type PostsState = {
    isLoading: boolean;
    error: string | null;
    data: RedditPost[];
}

const initialState: PostsState = {
    isLoading: false,
    error: null,
    data: [],
}

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchPosts.pending, (state) => {
            state.isLoading = true;
            state.error = null;
        });
        builder.addCase(fetchPosts.fulfilled, (state, action: PayloadAction<FetchPostsPayload>) => {
            state.isLoading = false;
            state.data = action.payload.posts;
        });
        builder.addCase(fetchPosts.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error.message || 'Something went wrong';
        });
    }
}
);

export const { reducer: postsSliceReducer } = postsSlice;