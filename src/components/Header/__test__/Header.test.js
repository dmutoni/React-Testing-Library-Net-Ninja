import { render, screen } from "@testing-library/react";
import Header from "../Header";

it("should render same text passrd into title prop", () => {
  render(<Header title="My Header" />);
  const headingElement = screen.getByText(/my header/i);
  expect(headingElement).toBeInTheDocument();
});
