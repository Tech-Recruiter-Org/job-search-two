const React = require('react');
const { render, screen, waitFor } = require('@testing-library/react');
require('@testing-library/jest-dom');
// const userEvent = require('@testing-library/user-event');
// const regeneratorRuntime = require('regenerator-runtime');

// const App = require('../../App.jsx');
const Search = require('../Search.jsx');
// const Login = require('../client/sr/components/loginPage/Login.jsx');

// Use this to test React Testing Library

// test login functionality actually logs in a test user
// test logout functionality actually logsouts a test user
// test job search functionality retrieves job

describe('Unit testing React components', () => {
  // beforeAll(() => {
  //   text = render(<Form {...props} />);
  // });
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

  // test('Test Login Button Exists', () => {
  //   expect(text.getByText('Login')).toBeInTheDocument();
  // })
});
