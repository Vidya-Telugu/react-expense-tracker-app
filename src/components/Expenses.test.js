import { render, screen} from '@testing-library/react';
import Expenses from "./Expenses";
test('simple test', () => {
  expect(true).toBe(true);
});

test('renders counter with initial value', () => {
  render(<Expenses/>);
  const CategoryText = screen.getByText(/Category/i);
  expect(CategoryText).toBeInTheDocument();
});