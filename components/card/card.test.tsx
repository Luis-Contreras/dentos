import React from "react";
import { render } from "@testing-library/react";
import Card from "./";

describe("Card component", () => {
  test("renders card with title and content", () => {
    const MOCK_DATA = {
      id: 1,
      image: "string",
      name: "string",
      species: "string",
      status: "string",
      origin: {
        name: "string",
      },
    };

    const { getByText } = render(<Card character={MOCK_DATA} />);

    const titleElement = getByText(MOCK_DATA.name);
    const contentElement = getByText(MOCK_DATA.status);

    expect(titleElement).toBeInTheDocument();
    expect(contentElement).toBeInTheDocument();
  });
});
