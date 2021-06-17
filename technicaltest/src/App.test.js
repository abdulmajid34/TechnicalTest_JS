import { fireEvent, render, screen } from '@testing-library/react';
// import App from './App';
import LoginPage from './pages/LoginPage'

test('renders learn react link', () => {
  render(<LoginPage />);
  
  const checkedEmail = screen.getByLabelText('email')
  fireEvent.click(checkedEmail)

  const checkedPass = screen.getByLabelText("password")
  fireEvent.click(checkedPass)
  // const error = screen.getByTestId("form-error")
  // expect(error).toHaveTextContact("email is required!")
});
