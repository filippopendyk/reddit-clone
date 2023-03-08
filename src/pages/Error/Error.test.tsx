import Error from "./Error";
import renderer from 'react-test-renderer';
import { Provider } from "react-redux";
import store from "../../store";

describe('Error', () => {
    it('Renders without crashing', () => {
        const tree = renderer
        .create(
            <Provider store={store}>
                <Error/>
            </Provider>
        )
        .toJSON();
        expect(tree).toMatchSnapshot();
    })
})