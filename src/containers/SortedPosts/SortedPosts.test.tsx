import SortedPosts from "./SortedPosts";
import renderer from 'react-test-renderer';
import { Provider } from "react-redux";
import store from "../../store";
import posts from "../../mocks/posts";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

describe('SortedPosts', () => {
    it('Renders without crashing', () => {
        const tree = renderer
        .create(
            <MemoryRouter>
                <Provider store={store}>
                    <SortedPosts filteredPosts={posts} />
                </Provider>
            </MemoryRouter>
        )
        .toJSON();
        expect(tree).toMatchSnapshot();
    })

    it('Renders list of posts', () => {
        render(
            <MemoryRouter>
                <Provider store={store}>
                    <SortedPosts filteredPosts={posts}/>
                </Provider>
            </MemoryRouter>
        )

        const listOfPosts = screen.getByRole('list');
        expect(listOfPosts).toBeInTheDocument();
    })
})