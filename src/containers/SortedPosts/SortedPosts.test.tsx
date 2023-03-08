import SortedPosts from "./SortedPosts";
import renderer from 'react-test-renderer';
import { Provider } from "react-redux";
import store from "../../store";
import posts from "../../mocks/posts";
import { render, screen } from "@testing-library/react";

describe('SortedPosts', () => {
    it('Renders without crashing', () => {
        const tree = renderer
        .create(
            <Provider store={store}>
                <SortedPosts filteredPosts={posts} />
            </Provider>
        )
        .toJSON();
        expect(tree).toMatchSnapshot();
    })

    it('Renders list of posts', () => {
        render(
            <Provider store={store}>
                <SortedPosts filteredPosts={posts}/>
            </Provider>
        )

        const listOfPosts = screen.getByRole('list');
        expect(listOfPosts).toBeInTheDocument();
    })
})