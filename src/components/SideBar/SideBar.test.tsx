import SideBar from "./SideBar";
import { render, screen } from "@testing-library/react";
import { describe, it } from "vitest";

describe('SideBar', () => {
    it('Renders the main heading of the site', () => {
        render(<SideBar/>);
        const heading = screen.getByRole('heading');
        
        expect(heading).toBeInTheDocument();
        expect(heading).toHaveTextContent('Popditt');
    })
})