// import React from 'react';
// import { render } from '@testing-library/react';
// import Login from '../pages/Login';

// test('renders learn react link', () => {
//   const { getByText } = render(<Login />);
//   const linkElement = getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

// describe('Testing route:', () => {
//   describe('Login page', () => {
//     it('tentando aprender', () => {
//       act(() => {
//         render(<Login />, null);
//       })

//       const linkToRegisterByText = getByText(/Not registered? Click here!/);
//       console.log(linkToRegisterByText);
//       expect(linkToRegisterByText).exists();
//     });

//     it('rediret to Register when you click in register link', () => {
//       const { getByRole, getByText } = render(<Login />);

//       const linkToRegister = getByRole('link',);
//       const linkToRegisterByText = getByText(/Not registered? Click here!/);

//       console.log(linkToRegister);
//       console.log(linkToRegisterByText);

//       fireEvent.click(linkToRegisterByText);
//       const { pathname } = history.location;
//       expect(pathname).toBe('/register');
//     });
    // it('rediret to home page after login', () => {
    //   const { getAllByRole, getByText, history } = renderWithRouter(<App />);
    //   const email = 'pessoa.usuaria@gmail.com';
    //   const password = '';

    //   const inputs = getAllByRole('input');
    //   console.log(inputs); 
    // })
//   });
// });
