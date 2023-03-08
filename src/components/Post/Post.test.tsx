import { Provider } from "react-redux";
import store from "../../store";
import Post from "./Post";
import { render, screen } from "@testing-library/react";
import { RedditPost } from "../../features/posts/postsSlice";
import posts from "../../mocks/posts";
import renderer from 'react-test-renderer';
import SortedPosts from "../../containers/SortedPosts/SortedPosts";
import formatUps from "../../utils/formatUps";
import getTimeDifference from "../../utils/getTimeDifference";

describe('Post', () => {
    it('Renders without crashing', () => {
        const exampleRedditPost = posts[0];
        const tree = renderer
        .create(
            <Provider store={store}>
                <Post post={exampleRedditPost} key={exampleRedditPost.id} author={exampleRedditPost.author} id={exampleRedditPost.id} thumbnail={exampleRedditPost.thumbnail} subreddit_name_prefixed={exampleRedditPost.subreddit_name_prefixed}/>
            </Provider>
        )
        .toJSON();
        expect(tree).toMatchSnapshot();
    })
    it('Renders post with provided content', () => {
        const exampleRedditPost = posts[0];
        render(
            <Provider store={store}>
                <Post post={exampleRedditPost} key={exampleRedditPost.id} author={exampleRedditPost.author} id={exampleRedditPost.id} thumbnail={exampleRedditPost.thumbnail} subreddit_name_prefixed={exampleRedditPost.subreddit_name_prefixed}/>
            </Provider>
        );
    
        const postUps = screen.getByText(formatUps(exampleRedditPost.ups));
        expect(postUps).toBeInTheDocument();

        const authorAndRelTime = screen.getByText(`Posted by ${exampleRedditPost.author} ${getTimeDifference(exampleRedditPost.created)}`);
        expect(authorAndRelTime).toBeInTheDocument();

        const title = screen.getByText(exampleRedditPost.title);
        expect(title).toBeInTheDocument();
    })
});