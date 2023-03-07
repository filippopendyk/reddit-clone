import { screen, render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Posts from "./Posts";
import renderer from 'react-test-renderer';
import { Provider } from "react-redux";
import store from "../../store";

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
    
});