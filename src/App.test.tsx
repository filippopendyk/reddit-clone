import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { describe, it } from 'vitest';
import store from './store';
import { WrappedApp, App } from './App';

describe('App', () => {
    it('Renders Home category, if no category is provided', () => {
        render(
            <MemoryRouter initialEntries={['/']}>
                <Provider store={store}>
                    <App/>
                </Provider>
            </MemoryRouter>
        );

        expect(
            screen.getByRole('heading', {
                level: 2,
            })
        ).toHaveTextContent('Home');
    });

    it('Renders provided category', () => {
        render(
            <MemoryRouter initialEntries={['/example']}>
                <Provider store={store}>
                    <App/>
                </Provider>
            </MemoryRouter>
        );

        expect(
            screen.getByRole('heading', {
                level: 2,
            })
        ).toHaveTextContent('example');
    });
});
