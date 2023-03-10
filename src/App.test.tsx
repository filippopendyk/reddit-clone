import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { describe, it } from 'vitest';
import store from './store';
import { WrappedApp, App } from './App';
import renderer from 'react-test-renderer';
import { waitFor } from '@testing-library/react';

describe('App', () => {
    it('Renders without crashing', () => {
        const tree = renderer
        .create(<MemoryRouter initialEntries={['/']}>
                    <Provider store={store}>
                        <App/>
                    </Provider>
                </MemoryRouter>)
        .toJSON();
        expect(tree).toMatchInlineSnapshot(`
          <div
            className="app"
          >
            <div
              className="navbar"
            >
              <a
                className="menu-bars"
                href="/"
                onClick={[Function]}
              >
                <svg
                  data-testid="open-btn"
                  fill="currentColor"
                  height="1em"
                  onClick={[Function]}
                  stroke="currentColor"
                  strokeWidth="0"
                  style={
                    {
                      "color": "#fff",
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
            </div>
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
                          "color": "#fff",
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
                <li>
                  <p>
                    Loading categories...
                  </p>
                </li>
              </ul>
            </nav>
            <main>
              <div
                className="wrapper"
              >
                <div
                  className="filter-menu"
                >
                  <button
                    className="activeFilter"
                    onClick={[Function]}
                  >
                    Best
                  </button>
                  <button
                    onClick={[Function]}
                  >
                    Top
                  </button>
                  <button
                    onClick={[Function]}
                  >
                    New
                  </button>
                </div>
                <div
                  className="posts-container"
                >
                  <ul />
                </div>
              </div>
            </main>
          </div>
        `);
    })

    it('Renders provided category', () => {
        const redditCategory = 'example';

        render(
            <MemoryRouter initialEntries={[`/${redditCategory}`]}>
                <Provider store={store}>
                    <App/>
                </Provider>
            </MemoryRouter>
        );
        
        waitFor(() => {
            const categoryName = screen.findByText(`r/${redditCategory}`);
            expect(categoryName).toBeInTheDocument();
        })
        
    });
});
