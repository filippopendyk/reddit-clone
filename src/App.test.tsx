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
        expect(tree).toMatchSnapshot();
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
