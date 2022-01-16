import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import FollowersList from "../FollowersList";

const MockFollowersList = () => {
  return (
    <BrowserRouter>
      <FollowersList />
    </BrowserRouter>
  );
};

describe("FollowersList", () => {
  it("should renders follower item", async () => {
    render(<MockFollowersList />);
    const followeDivElements = await screen.findByTestId("followe-item-0");
    expect(followeDivElements.length).toBeInTheDocument(5);
  });
  it("should render multiple follower items", async () => {
    render(<MockFollowersList />);
    const followeDivElements = await screen.findAllByTestId(/follower-item/i);
    expect(followeDivElements.length).toBeInTheDocument(5);
  });
});
