import Reach from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import regeneratorRuntime from 'regenerator-runtime';


import App from '../../App.jsx';
import Search from '../Search.jsx';
import Login from '../client/sr/components/loginPage/Login.jsx';
import { isAsyncThunkAction } from '@reduxjs/toolkit';
import { Experimental_CssVarsProvider } from '@mui/material';

// Use this to test React Testing Library

// test login functionality actually logs in a test user
// test logout functionality actually logsouts a test user
// test job search functionality retrieves job

describe('Unit testing React components', () => {
  describe('Login Functionality', () => {
    it('should contain the heading "Select Job Type"', () => {
      render(<Search />);
      const heading = screen.getByText(/Select Job Type/);
      expect(heading).toBeInTheDocument();
    });

    // const props = {
    //   userName: trevor,
    //   password: password123,
    //   city: dallas
    // };

    // beforeAll(() => {
    //   text = render(<Form {...props} />);
    // });

    // test('Test Login Button Exists', () => {
    //   expect(text.getByText('Login')).toBeInTheDocument();
    // })
  });
});
