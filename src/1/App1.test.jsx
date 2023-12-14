import { render, screen } from "@testing-library/react";
import App from "../1/App1";

test("App contains correct heading", () => {
  render(<App />);
  const headingElement = screen.getByText(/Testing Library/i);
  expect(headingElement).toBeInTheDocument();
});

test("App contains correct heading", () => {
  render(<App />);
  const aElement = screen.getByRole('link', {name : /Learn React/i});
  expect(aElement).toBeInTheDocument();
});



