import { render, screen } from "@testing-library/react";
import Header from "../Header";

it("should render same text passed into title prop", () => {
  render(<Header title="My Header" />);
  const headingElement = screen.getByText(/my header/i);
  expect(headingElement).toBeInTheDocument();
});

// it("should get element by role", () => {
//   render(<Header title="My Header" />);
//   const headingElement = screen.getByRole(/heading/i);
//   expect(headingElement).toBeInTheDocument();
// });
it("should get element by role", async () => {
  render(<Header title="My Header" />);
  const headingElement = screen.getByRole("heading", { name: "My Header" });
  expect(headingElement).toBeInTheDocument();
});

it("should get by title", async () => {
  render(<Header title="My Header" />);
  const headingElement = screen.getByTitle("Header");
  expect(headingElement).toBeInTheDocument();
});

it("should get by id", async () => {
  render(<Header title="My Header" />);
  const headingElement = screen.getByTestId("header-2");
  expect(headingElement).toBeInTheDocument();
});

// FIND B Y
it("should get find by id", async () => {
  render(<Header title="My Header" />);
  const headingElement = await screen.findByText(/my header/i);
  expect(headingElement).toBeInTheDocument();
});

//Querry By
it("should query by", async () => {
  render(<Header title="My Header" />);
  const headingElement = screen.queryByText(/dogs/i);
  expect(headingElement).not.toBeInTheDocument();
});

it("should use get all by role", async () => {
  render(<Header title="My Header" />);
  const headingElements = screen.getAllByRole("heading");
  expect(headingElements.length).toBe(2);
});
