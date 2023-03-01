import { screen, render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Posts from "./Posts";
import renderer from 'react-test-renderer';

describe('Posts Container', () => {
    it('Renders correctly', () => {
        const tree = renderer
        .create(<Posts isLoading={false} error={null} data={[]}/>)
        .toJSON();
        expect(tree).toMatchSnapshot();
    });
    
});