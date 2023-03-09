import PostsSorting from "./PostsSorting";
import renderer from 'react-test-renderer';
import { Provider } from "react-redux";
import store from "../../store";
import posts from "../../mocks/posts";
import { render } from "@testing-library/react";
import { RedditPost } from "../../features/posts/postsSlice";

describe('PostsSorting', () => {
    it('Renders without crashing', () => {
        const filter = 'best';
        const tree = renderer
        .create(
            <Provider store={store}>
                <PostsSorting posts={posts} filter={filter}/>
            </Provider>
        )
        .toJSON();
        expect(tree).toMatchSnapshot();
    })

    it('Filters posts by ups while top filter is provided', () => {
        let postsToFilter = posts;
        postsToFilter.sort((a, b) => {
            if(a.ups > b.ups) return -1;
            if(a.ups < b.ups) return 1;
            return 0;
        })

        expect(postsToFilter[0].ups > postsToFilter[1].ups).toBeTruthy();
    });
    it('Filters posts by date created while new filter is provided', () => {
        let postsToFilter = posts;
        postsToFilter.sort((a, b) => {
            if(a.created > b.created) return -1;
            if(a.created < b.created) return 1;
            return 0;
        })

        expect(postsToFilter[0].created > postsToFilter[1].created).toBeTruthy();
    });
})