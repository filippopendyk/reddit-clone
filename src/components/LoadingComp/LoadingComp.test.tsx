import LoadingComp from "./LoadingComp";
import renderer from 'react-test-renderer';

describe('LoadingComp', () => {
    it('Renders without crashing', () => {
        const tree = renderer
        .create(
            <LoadingComp/>
        )
        .toJSON();
        expect(tree).toMatchSnapshot();
    })
})