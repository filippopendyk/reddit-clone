import { screen, render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Posts from "./Posts";
import renderer from 'react-test-renderer';
import { Provider } from "react-redux";
import store from "../../store";
import posts from "../../mocks/posts";
import getTimeDifference from "../../utils/getTimeDifference";
import getActualTimeInSeconds from "../../utils/getActualTime";

describe('Posts Container', () => {
    it('Renders correctly', () => {
        const tree = renderer
        .create(
            <Provider store={store}>
                <Posts isLoading={false} error={null} data={[]}/>
            </Provider>
        )
        .toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('Renders the loading component while loading the posts', () => {
        render(
            <Provider store={store}>
                <Posts isLoading={true} error={null} data={[]}/>
            </Provider>
        )
        const heading = screen.getByRole('heading', {level: 3});
        expect(heading).toHaveTextContent('Loading posts...');
    });

    it('Renders the error component when encountered the error while loading the posts', () => {
        const errorMessage = 'network error';
        
        render(
            <Provider store={store}>
                <Posts isLoading={false} error={errorMessage} data={[]}/>
            </Provider>
        )
        
        const heading = screen.getByRole('heading', {level: 3});
        const paragraph = screen.getByText(`Reason: ${errorMessage}`);
        
        expect(heading).toHaveTextContent('Error while loading posts! Try again!');
        expect(paragraph).toBeInTheDocument();
    })

    it('Renders the posts when no error encountered, and posts correctly fetched', () => {
        render(
            <Provider store={store}>
                <Posts isLoading={false} error={null} data={posts}/>
            </Provider>
        );

        posts.forEach((post) => {
            const title = screen.getByText(post.title);
            const subredditName = screen.getByText(post.subreddit_name_prefixed);
            const author = screen.getByText(`Posted by ${post.author} ${getTimeDifference(post.created, getActualTimeInSeconds())}`);

            expect(title).toBeInTheDocument();
            expect(subredditName).toBeInTheDocument();
            expect(author).toBeInTheDocument();
        })
    })
});