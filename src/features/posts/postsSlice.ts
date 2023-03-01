import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

type RedditApiResponse<T> = {
  data: {
    children: {
      data: T;
    }[];
  }
}

type Post = {
  id: string;
  title: string;
  author: string;
  score: number;
  num_comments: number;
  created_utc: number;
}

type Comment = {
  id: string;
  body: string;
  author: string;
  score: number;
  created_utc: number;
}

type FetchPostsPayload = {
  posts: Post[];
  topic: string;
}

export const fetchPosts = createAsyncThunk<FetchPostsPayload, string>(
  "posts/fetchPosts",
  async (topic: string, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `https://www.reddit.com/r/${topic}.json`
      );
      const data: RedditApiResponse<Post> = await response.json();

      const posts = data.data.children.map((child) => child.data);
      const postIds = posts.map((post) => post.id);

      const commentPromises = postIds.map(async (postId) => {
        const response = await fetch(
          `https://www.reddit.com/comments/${postId}.json`
        );
        const data: RedditApiResponse<Comment> = await response.json();
        return data.data.children.map((child) => child.data);
      });

      const comments = await Promise.all(commentPromises);

      const postsWithComments = posts.map((post, index) => ({
        ...post,
        comments: comments[index],
      }));

      return { posts: postsWithComments, topic };
    } catch (err) {
      return rejectWithValue("Failed to fetch posts");
    }
  }
);

interface PostsState {
  isLoading: boolean;
  error: string | null;
  data: Post[];
}

const initialState: PostsState = {
  isLoading: false,
  error: null,
  data: [],
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload.posts;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message ?? "Something went wrong";
      });
  },
});

export const { reducer: postsSliceReducer } = postsSlice;