import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RedditPost } from "../posts/postsSlice";
import axios from "axios";
import getAccessToken from "../../api/getAccessToken";

type PostState = {
  isLoading: boolean;
  error: string | null;
  data: RedditPost | null;
};

const initialState: PostState = {
  isLoading: false,
  error: null,
  data: null,
};

type FetchPostArguments = {
  postId: string;
  subreddit: string;
};

type FetchPostPayload = {
  post: RedditPost;
  subreddit: string;
};

export const fetchPost = createAsyncThunk<FetchPostPayload, FetchPostArguments>(
  "post/fetchPost",
  async ({ postId, subreddit }, thunkApi) => {
    try {
      const url: string = `https://www.reddit.com/r${subreddit}/comments/${postId}.json`;
      const accessToken = await getAccessToken();
      const headers = { Authorization: `Bearer ${accessToken}` };
      const post = await axios.get(url, { headers }).then((response) => {
        const post = response.data[0].data.children[0].data;
        return post;
      });
      return { post, subreddit };
    } catch (err) {
      throw new Error("Failed to fetch post");
    }
  }
);

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    deleteTheCurrentPost(state){
      state.data = null;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPost.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchPost.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload.post;
      })
      .addCase(fetchPost.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || "Something went wrong";
      });
  },
});

export const { deleteTheCurrentPost } = postSlice.actions;

export default postSlice.reducer;
