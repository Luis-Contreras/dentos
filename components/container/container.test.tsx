import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect"; // Import this for custom matchers
import Container from "./";

describe("Container component", () => {
  it("renders children", () => {
    const { getByText } = render(<Container>Child Component</Container>);

    expect(getByText("Child Component")).toBeInTheDocument();
  });
});
