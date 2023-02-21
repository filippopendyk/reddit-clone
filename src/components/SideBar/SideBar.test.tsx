import { screen, render } from "@testing-library/react"; 
import { MemoryRouter } from "react-router-dom";
import SideBar from "./SideBar";
import capitalizedNavLinks from "./SideBarMockData";

describe('SideBar', () => {
    it('Renders the SideBar component', () => {
        render(
        <MemoryRouter>
            <SideBar topCategories={capitalizedNavLinks}/>
        </MemoryRouter>
        );

        const mainHeading = screen.getByRole('heading', {level: 1});
        expect(mainHeading).toBeInTheDocument();
        expect(mainHeading).toHaveTextContent('Popditt');
    })
})