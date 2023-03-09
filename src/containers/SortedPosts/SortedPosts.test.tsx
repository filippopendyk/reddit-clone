import SortedPosts from "./SortedPosts";
import renderer from 'react-test-renderer';
import { Provider } from "react-redux";
import store from "../../store";
import posts from "../../mocks/posts";
import { render, screen } from "@testing-library/react";

describe('SortedPosts', () => {
    it('Renders without crashing', () => {
        const tree = renderer
        .create(
            <Provider store={store}>
                <SortedPosts filteredPosts={posts} />
            </Provider>
        )
        .toJSON();
        expect(tree).toMatchInlineSnapshot(`
          <ul>
            <li>
              <div
                className="stats-container"
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
                  viewBox="0 0 320 512"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M177 159.7l136 136c9.4 9.4 9.4 24.6 0 33.9l-22.6 22.6c-9.4 9.4-24.6 9.4-33.9 0L160 255.9l-96.4 96.4c-9.4 9.4-24.6 9.4-33.9 0L7 329.7c-9.4-9.4-9.4-24.6 0-33.9l136-136c9.4-9.5 24.6-9.5 34-.1z"
                  />
                </svg>
                <p>
                  123
                </p>
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
                  viewBox="0 0 320 512"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z"
                  />
                </svg>
              </div>
              <div
                className="content-container"
              >
                <img
                  alt="example"
                  src="https://i.redd.it/ccskoy6lvx881.jpg"
                />
                <article
                  className="text-container"
                >
                  <p
                    className="subreddit-name"
                  >
                    r/example
                  </p>
                  <p
                    className="author-time"
                  >
                    Posted by 
                    filip popendyk
                     
                    49 years ago
                     
                  </p>
                  <p
                    className="title"
                  >
                    example
                  </p>
                  <p
                    className="selftext"
                    data-testid="selftext"
                  >
                    siemano
                  </p>
                </article>
              </div>
            </li>
            <li>
              <div
                className="stats-container"
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
                  viewBox="0 0 320 512"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M177 159.7l136 136c9.4 9.4 9.4 24.6 0 33.9l-22.6 22.6c-9.4 9.4-24.6 9.4-33.9 0L160 255.9l-96.4 96.4c-9.4 9.4-24.6 9.4-33.9 0L7 329.7c-9.4-9.4-9.4-24.6 0-33.9l136-136c9.4-9.5 24.6-9.5 34-.1z"
                  />
                </svg>
                <p>
                  2k
                </p>
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
                  viewBox="0 0 320 512"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z"
                  />
                </svg>
              </div>
              <div
                className="content-container"
              >
                <article
                  className="text-container"
                >
                  <p
                    className="subreddit-name"
                  >
                    r/2137
                  </p>
                  <p
                    className="author-time"
                  >
                    Posted by 
                    wykop.pl
                     
                    -19693803915 seconds ago
                     
                  </p>
                  <p
                    className="title"
                  >
                    2137
                  </p>
                </article>
              </div>
            </li>
          </ul>
        `);
    })

    it('Renders list of posts', () => {
        render(
            <Provider store={store}>
                <SortedPosts filteredPosts={posts}/>
            </Provider>
        )

        const listOfPosts = screen.getByRole('list');
        expect(listOfPosts).toBeInTheDocument();
    })
})