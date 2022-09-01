import { render, screen } from "@testing-library/react";
import { useSelector } from "react-redux";
// import * as reduxHooks from "react-redux";
import Register from "../pages/Register";

jest.mock("react-redux");

test("on loading, the confirm buttons is disabled", () => {
  useSelector.mockReturnValue([]);
  const component = render(<Register />);
  screen.getByRole(button, { name: /submit/i });
});
