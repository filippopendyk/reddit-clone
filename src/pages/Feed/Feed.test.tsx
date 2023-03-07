import Feed from "./Feed";
import renderer from 'react-test-renderer';
import { Provider } from "react-redux";
import store from "../../store";

describe('Feed', () => {
    it('Renders without crashing', () => {
        const tree = renderer
        .create(
            <Provider store={store}>
                <Feed />
            </Provider>)
        .toJSON();
        expect(tree).toMatchSnapshot();
    })
})