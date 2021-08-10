import React from 'react';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import App from '../App';
import renderWithRouter from './renderWithRouter';

describe('Testing if all links in', () => {
    describe('login page:', () => {
        // beforeEach(() => {
        // });
        // afterEach(() => cleanup);
        it('Redirect to Register Page', () => {
            const { getByText, getByRole } = renderWithRouter(<App />);

            const linkToRegister = getByText(/Not registered\? Click here!/i);
            expect(linkToRegister).toBeInTheDocument();

            fireEvent.click(linkToRegister);

            const buttonRegister = getByRole('button');
            expect(buttonRegister).toBeInTheDocument();
        });
    });
});
