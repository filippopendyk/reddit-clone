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
        expect(tree).toMatchInlineSnapshot(`
          [
            <div
              className="navbar"
            >
              <a
                className="menu-bars"
                data-testid="open-btn"
                href="/"
                onClick={[Function]}
              >
                <svg
                  fill="currentColor"
                  height="1em"
                  onClick={[Function]}
                  stroke="currentColor"
                  strokeWidth="0"
                  style={
                    {
                      "color": undefined,
                    }
                  }
                  viewBox="0 0 448 512"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
                  />
                </svg>
              </a>
              <div
                className="header-container"
              >
                <h1>
                  Popditt
                </h1>
              </div>
            </div>,
            <nav
              className="nav-menu"
              data-testid="nav-menu"
            >
              <ul
                className="nav-menu-items"
                onClick={[Function]}
              >
                <li
                  className="navbar-toggle"
                >
                  <a
                    className="menu-bars"
                    data-testid="close-btn"
                    href="/"
                    onClick={[Function]}
                  >
                    <svg
                      fill="currentColor"
                      height="1em"
                      stroke="currentColor"
                      strokeWidth="0"
                      style={
                        {
                          "color": undefined,
                        }
                      }
                      viewBox="0 0 1024 1024"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 0 0 203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"
                      />
                    </svg>
                  </a>
                </li>
                <li
                  className="nav-item"
                  onClick={[Function]}
                >
                  <form
                    className="input-form"
                    onSubmit={[Function]}
                  >
                    <input
                      onChange={[Function]}
                      placeholder="Search"
                      type="text"
                      value=""
                    />
                  </form>
                </li>
                <li
                  className="nav-item"
                >
                  <a
                    className="menu-bars"
                    href="/"
                    onClick={[Function]}
                  >
                    <svg
                      fill="currentColor"
                      height="1em"
                      stroke="currentColor"
                      strokeWidth="0"
                      style={
                        {
                          "color": undefined,
                        }
                      }
                      viewBox="0 0 24 24"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5 22h14a2 2 0 0 0 2-2v-9a1 1 0 0 0-.29-.71l-8-8a1 1 0 0 0-1.41 0l-8 8A1 1 0 0 0 3 11v9a2 2 0 0 0 2 2zm5-2v-5h4v5zm-5-8.59 7-7 7 7V20h-3v-5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v5H5z"
                      />
                    </svg>
                    <span>
                      Home
                    </span>
                  </a>
                </li>
                <li
                  className="nav-item"
                >
                  <a
                    className="menu-bars"
                    href="/Leauge of Legends"
                    onClick={[Function]}
                  >
                    <svg
                      fill="currentColor"
                      height="1em"
                      stroke="currentColor"
                      strokeWidth="0"
                      style={
                        {
                          "color": undefined,
                        }
                      }
                      viewBox="0 0 24 24"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10 3H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM9 9H5V5h4v4zm11-6h-6a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zm-1 6h-4V5h4v4zm-9 4H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1zm-1 6H5v-4h4v4zm8-6c-2.206 0-4 1.794-4 4s1.794 4 4 4 4-1.794 4-4-1.794-4-4-4zm0 6c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2z"
                      />
                    </svg>
                    <span>
                      Leauge of Legends
                    </span>
                  </a>
                </li>
                <li
                  className="nav-item"
                >
                  <a
                    className="menu-bars"
                    href="/AskReddit"
                    onClick={[Function]}
                  >
                    <svg
                      fill="currentColor"
                      height="1em"
                      stroke="currentColor"
                      strokeWidth="0"
                      style={
                        {
                          "color": undefined,
                        }
                      }
                      viewBox="0 0 24 24"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10 3H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM9 9H5V5h4v4zm11-6h-6a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zm-1 6h-4V5h4v4zm-9 4H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1zm-1 6H5v-4h4v4zm8-6c-2.206 0-4 1.794-4 4s1.794 4 4 4 4-1.794 4-4-1.794-4-4-4zm0 6c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2z"
                      />
                    </svg>
                    <span>
                      AskReddit
                    </span>
                  </a>
                </li>
                <li
                  className="nav-item"
                >
                  <a
                    className="menu-bars"
                    href="/Some example"
                    onClick={[Function]}
                  >
                    <svg
                      fill="currentColor"
                      height="1em"
                      stroke="currentColor"
                      strokeWidth="0"
                      style={
                        {
                          "color": undefined,
                        }
                      }
                      viewBox="0 0 24 24"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10 3H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM9 9H5V5h4v4zm11-6h-6a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zm-1 6h-4V5h4v4zm-9 4H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1zm-1 6H5v-4h4v4zm8-6c-2.206 0-4 1.794-4 4s1.794 4 4 4 4-1.794 4-4-1.794-4-4-4zm0 6c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2z"
                      />
                    </svg>
                    <span>
                      Some example
                    </span>
                  </a>
                </li>
                <li
                  className="nav-item"
                >
                  <a
                    className="menu-bars"
                    href="/Funny"
                    onClick={[Function]}
                  >
                    <svg
                      fill="currentColor"
                      height="1em"
                      stroke="currentColor"
                      strokeWidth="0"
                      style={
                        {
                          "color": undefined,
                        }
                      }
                      viewBox="0 0 24 24"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10 3H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM9 9H5V5h4v4zm11-6h-6a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zm-1 6h-4V5h4v4zm-9 4H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1zm-1 6H5v-4h4v4zm8-6c-2.206 0-4 1.794-4 4s1.794 4 4 4 4-1.794 4-4-1.794-4-4-4zm0 6c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2z"
                      />
                    </svg>
                    <span>
                      Funny
                    </span>
                  </a>
                </li>
              </ul>
            </nav>,
          ]
        `);
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