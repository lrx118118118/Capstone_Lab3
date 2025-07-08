import { render, screen } from '@testing-library/react';
import TodoList from './TodoList';

test('renders Todo List heading', () => {
  render(<TodoList />);
  const headingElement = screen.getByText(/Todo List/i);
  expect(headingElement).toBeInTheDocument();
});
