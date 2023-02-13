import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Input from "./Input";
import userEvent from "@testing-library/user-event";

describe("Input", () => {
  test("Input initial render", () => {
    render(<Input initialValue="Hello" />);
    expect(screen.getByTestId("input").value).toBe("Hello");
  });

  test("Input typing", () => {
    render(<Input />);
    userEvent.type(screen.getByTestId("input"), "M4");
    expect(screen.getByTestId("input").value).toBe("M4");
  });

  test("Input placeholder checkout", () => {
    render(<Input placeholder="Some Text" />);
    expect(screen.getByPlaceholderText("Some Text...")).toBeInTheDocument();
  });
});
