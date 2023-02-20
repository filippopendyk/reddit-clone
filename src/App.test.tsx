import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, it } from 'vitest';

import { WrappedApp, App } from './App';

describe('App', () => {
    it('Renders Home category, if not category is provided', () => {
        render(
            <MemoryRouter initialEntries={['/']}>
                <App/>
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
                <App/>
            </MemoryRouter>
        );

        expect(
            screen.getByRole('heading', {
                level: 2,
            })
        ).toHaveTextContent('example');
    })
});
