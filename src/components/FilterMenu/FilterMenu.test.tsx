import FilterMenu from "./FilterMenu";
import renderer from 'react-test-renderer';
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../../store";

describe('FilterMenu', () => {
    it('Renders without crashing', () => {
        const tree = renderer
        .create(
            <Provider store={store}>
                <FilterMenu/>
            </Provider>
        )
        .toJSON();
        expect(tree).toMatchSnapshot();
    })
})