import ErrorComp from "./ErrorComp";
import renderer from 'react-test-renderer';
import { render, screen } from "@testing-library/react";

describe('ErrorComp', () => {
    it('Renders without crashing', () => {
        const tree = renderer
        .create(
            <ErrorComp error={'network error'}/>
        )
        .toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('Renders the passed error string', () => {
        const exampleError = 'network error';

        render(
            <ErrorComp error={exampleError}/>
        );

        const error = screen.getByText(`Reason: ${exampleError}`);
        expect(error).toBeInTheDocument();
    })
})