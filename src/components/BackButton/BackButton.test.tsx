import BackButton from "./BackButton"
import renderer from 'react-test-renderer';
import { MemoryRouter } from "react-router-dom";

describe('BackButton', () => {
    it('Renders without crashing', () => {
        const tree = renderer
        .create(
            <MemoryRouter>
                <BackButton/>
            </MemoryRouter>
        )
        .toJSON();
        
        expect(tree).toMatchSnapshot();
    })
})