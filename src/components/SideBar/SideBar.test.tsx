import { screen, render } from "@testing-library/react"; 
import { MemoryRouter } from "react-router-dom";
import SideBar from "./SideBar";
import topCategories from "../../mocks/topCategoriesMock";

describe('SideBar', () => {
    it('Renders the SideBar component', () => {
        render(
        <MemoryRouter>
            <SideBar topCategories={topCategories}/>
        </MemoryRouter>
        );

        const mainHeading = screen.getByRole('heading', {level: 1});
        expect(mainHeading).toBeInTheDocument();
        expect(mainHeading).toHaveTextContent('Popditt');
    })

    it('Renders all nav list items with topcategories', () => {
        render(
            <MemoryRouter>
                <SideBar topCategories={topCategories}/>
            </MemoryRouter>
        )

        const expectedLength = topCategories.length + 2;
        const navLinks = screen.getAllByRole('listitem');
        expect(navLinks.length).toEqual(expectedLength);
    })
})