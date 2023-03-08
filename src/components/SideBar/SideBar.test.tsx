import { screen, render, fireEvent} from "@testing-library/react"; 
import { MemoryRouter } from "react-router-dom";
import SideBar from "./SideBar";
import topCategories from "../../mocks/topCategoriesMock";
import renderer from 'react-test-renderer';


describe('SideBar', () => {
    it('Renders without crashing', () => {
        const tree = renderer
        .create(
            <MemoryRouter>
                <SideBar topCategories={topCategories} isLoading={false} error={null}/>
            </MemoryRouter>   
        )
        .toJSON();
        expect(tree).toMatchSnapshot();
    })
    it('Renders the SideBar component', () => {
        render(
        <MemoryRouter>
            <SideBar topCategories={topCategories} isLoading={false} error={null}/>
        </MemoryRouter>
        );

        // Expects the heading to be present

        const mainHeading = screen.getByRole('heading', {level: 1});
        expect(mainHeading).toBeInTheDocument();
        expect(mainHeading).toHaveTextContent('Popditt');
    })

    it('Renders all nav list items with topcategories', () => {
        render(
            <MemoryRouter>
                <SideBar topCategories={topCategories} isLoading={false} error={null}/>
            </MemoryRouter>
        )

        // Expects the sidebar to have all categories displayed

        const expectedLength = topCategories.length + 2;
        const navLinks = screen.getAllByRole('listitem');
        expect(navLinks.length).toEqual(expectedLength);

        // Expects every navlink to be present by checking presency of every element of array passed.

        topCategories.forEach((navLink: string) => {
            let navLinkElement = screen.getByText(`${navLink}`);

            expect(navLinkElement).toBeInTheDocument();
        })
    })

    it('Renders the Loading message while is loading categories', () => {
        render(
            <MemoryRouter>
                <SideBar topCategories={[]} isLoading={true} error={null}/>
            </MemoryRouter>
        )

        const loadingMessage = screen.getByText('Loading categories...');
        expect(loadingMessage).toBeInTheDocument();
    });

    it('Renders the Error message when not able to load categories', () => {
        let errorMessage: string = 'network error';

        render(
            <MemoryRouter>
                <SideBar topCategories={[]} isLoading={false} error={errorMessage}/>
            </MemoryRouter>
        )

        let errorParagraph = screen.getByText(`Error: ${errorMessage}`);
        expect(errorParagraph).toBeInTheDocument();
    });

})