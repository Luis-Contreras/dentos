import React from "react";
import { render } from "@testing-library/react";
import Error from "./";

describe("error component", () => {
  test("renders error", () => {
    const { getByText } = render(<Error />);

    const errorElement = getByText("ERROR OR NO DATA...");
    expect(errorElement).toBeInTheDocument();
  });
});
