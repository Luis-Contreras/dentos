import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Input from "./";

test("Input calls onChange handler on input", () => {
  const mockOnChange = jest.fn();
  const { getByPlaceholderText } = render(
    <Input placeholder="Enter text" onChange={mockOnChange} />
  );
  const inputElement = getByPlaceholderText("Enter text");
  fireEvent.change(inputElement, { target: { value: "Test value" } });
  expect(mockOnChange).toHaveBeenCalledWith("Test value");
});
