import { render, screen } from "@testing-library/react";
import TodoFooter from "../TodoFooter";
import { BrowserRouter } from "react-router-dom";

const MockTodoFooter = ({ numberOfIncompleteTasks }) => {
  return (
    <BrowserRouter>
      <TodoFooter numberOfIncompleteTasks={numberOfIncompleteTasks} />
    </BrowserRouter>
  );
};

describe("Todo footer", () => {
  describe("Testing functionality 5", () => {
    it("should render the correct amount of incomplete tasks", async () => {
      render(<MockTodoFooter numberOfIncompleteTasks={5} />);
      const paragraphElement = screen.getByText(/5 tasks left/i);
      expect(paragraphElement).toBeInTheDocument();
    });
  });

  describe("Testing functionality 1", () => {
    it('should render "task" when the amount of incomplete is one', async () => {
      render(<MockTodoFooter numberOfIncompleteTasks={1} />);
      const paragraphElement = screen.getByText(/1 task left/i);
      expect(paragraphElement).toBeInTheDocument();
    });

    it("should render the truthy", async () => {
      render(<MockTodoFooter numberOfIncompleteTasks={1} />);
      const paragraphElement = screen.getByText(/1 task left/i);
      expect(paragraphElement).toBeTruthy();
    });

    it("should check if the element is visible to the user", async () => {
      render(<MockTodoFooter numberOfIncompleteTasks={1} />);
      const paragraphElement = screen.getByText(/1 task left/i);
      expect(paragraphElement).toBeVisible();
    });

    it("should check if the dom contains an HTML element", async () => {
      render(<MockTodoFooter numberOfIncompleteTasks={1} />);
      const paragraphElement = screen.getByText(/1 task left/i);
      expect(paragraphElement).toContainHTML("p");
    });

    it("should check check if we have a text of one task", async () => {
      render(<MockTodoFooter numberOfIncompleteTasks={1} />);
      const paragraphElement = screen.getByTestId("paragraph");
      expect(paragraphElement.textContent).toBe("1 task left");
    });
  });
});
