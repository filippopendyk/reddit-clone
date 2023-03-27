import PostContentContainer from "./PostContentContainer";
import renderer from 'react-test-renderer';
import posts from "../../mocks/posts";
import { render, screen } from "@testing-library/react";
import formatUps from "../../utils/formatUps";
import getTimeDifference from "../../utils/getTimeDifference";
import getActualTimeInSeconds from "../../utils/getActualTime";

describe('PostContentContainer', () => {
    it('Renders without crashing', () => {
        const exampleRedditPost = posts[0];
        const tree = renderer
        .create(
            <PostContentContainer post={exampleRedditPost}/>
        )
        .toJSON();
        expect(tree).toMatchSnapshot();
    })

    it('Renders provided post props', () => {
        const exampleRedditPost = posts[0];
        render(
            <PostContentContainer post={exampleRedditPost}/>
        );

        const subredditName = screen.getByText(exampleRedditPost.subreddit_name_prefixed);
        expect(subredditName).toBeInTheDocument();

        const title = screen.getByText(exampleRedditPost.title);
        expect(title).toBeInTheDocument();

        const ups = screen.getByText(formatUps(exampleRedditPost.ups));
        expect(ups).toBeInTheDocument();

        const authorTime = screen.getByText(`Posted by ${exampleRedditPost.author} ${getTimeDifference(exampleRedditPost.created, getActualTimeInSeconds())}`);
        expect(authorTime).toBeInTheDocument();

        const img = screen.getByAltText(exampleRedditPost.title);
        expect(img).toBeInTheDocument();
    
        const selftext = screen.getByText(exampleRedditPost.selftext);
        expect(selftext).toBeInTheDocument();
    })
})