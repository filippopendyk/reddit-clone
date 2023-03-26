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
import { MemoryRouter } from "react-router-dom";
import getActualTimeInSeconds from "../../utils/getActualTime";

describe('Post', () => {
    it('Renders without crashing', () => {
        const exampleRedditPost = posts[0];
        const tree = renderer
        .create(
            <MemoryRouter>
                <Provider store={store}>
                    <Post post={exampleRedditPost} key={123} author={exampleRedditPost.author} id={123} thumbnail={exampleRedditPost.thumbnail} subreddit_name_prefixed={exampleRedditPost.subreddit_name_prefixed} selftext={exampleRedditPost.selftext}/>
                </Provider>
            </MemoryRouter>
        )
        .toJSON();
        expect(tree).toMatchSnapshot();
    })
    it('Renders post with provided content including thumbnail and selftext', () => {
        const exampleRedditPost = posts[0];
        render(
            <MemoryRouter>
                <Provider store={store}>
                    <Post post={exampleRedditPost} key={123} author={exampleRedditPost.author} id={123} thumbnail={exampleRedditPost.thumbnail} subreddit_name_prefixed={exampleRedditPost.subreddit_name_prefixed} selftext={exampleRedditPost.selftext}/>
                </Provider>
            </MemoryRouter>
        );
    
        const postUps = screen.getByText(formatUps(exampleRedditPost.ups));
        expect(postUps).toBeInTheDocument();

        const authorAndRelTime = screen.getByText(`Posted by ${exampleRedditPost.author} ${getTimeDifference(exampleRedditPost.created, getActualTimeInSeconds())}`);
        expect(authorAndRelTime).toBeInTheDocument();

        const title = screen.getByText(exampleRedditPost.title);
        expect(title).toBeInTheDocument();

        const postSelfText = screen.getByText(exampleRedditPost.selftext);
        expect(postSelfText).toBeInTheDocument();

        const selftextByTestId = screen.getByTestId('selftext');
        expect(selftextByTestId).toBeInTheDocument();

        const thumbnail = screen.getByRole('img');
        expect(thumbnail).toBeInTheDocument();

        const thumbnailByAltText = screen.getByAltText(exampleRedditPost.title);
        expect(thumbnailByAltText).toBeInTheDocument();
    })

    it('Correctly skips rendering the selfttext and thumbnail if no is provided', () => {
        const exampleRedditPost = posts[1];
        render(
            <MemoryRouter>
                <Provider store={store}>
                    <Post post={exampleRedditPost} key={123} author={exampleRedditPost.author} id={123} thumbnail={exampleRedditPost.thumbnail} subreddit_name_prefixed={exampleRedditPost.subreddit_name_prefixed} selftext={exampleRedditPost.selftext}/>
                </Provider>
            </MemoryRouter>
        )
        
        const thumbnail = screen.queryByRole('img');
        expect(thumbnail).not.toBeInTheDocument();

        const selftext = screen.queryByTestId('selftext')
        expect(selftext).not.toBeInTheDocument();
    })
});