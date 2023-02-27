import CategoryItem from "./CategoryItem";
import { screen, render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

describe('CategoryItem', () => {
    it('Renders the CategoryItem component', () => {
        render(
            <MemoryRouter>
                <CategoryItem topCategory="example"/>
            </MemoryRouter>
        )

        const listItem = screen.getByRole('listitem');

        expect(listItem).toBeInTheDocument();
    })

    it('Renders the CategoryItem with provided category', () => {
        let providedCategory = 'example';
        
        render(
            <MemoryRouter>
                <CategoryItem topCategory={providedCategory}/>
            </MemoryRouter>
        )

        const listItem = screen.getByRole('listitem');
        expect(listItem).toBeInTheDocument();

        expect(listItem).toHaveTextContent(providedCategory);
    })
})