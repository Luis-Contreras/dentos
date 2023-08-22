import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Pagination from "./";

describe("Pagination component", () => {
  test('disables "Previuos" button on first page', () => {
    const { getByText } = render(
      <Pagination currentPage={1} totalPages={10} onPageChange={() => {}} />
    );

    const previousButton = getByText("Previuos");
    expect(previousButton).toBeDisabled();
  });

  test('disables "Next" button on last page', () => {
    const { getByText } = render(
      <Pagination currentPage={10} totalPages={10} onPageChange={() => {}} />
    );

    const nextButton = getByText("Next");
    expect(nextButton).toBeDisabled();
  });

  test('calls onPageChange when "Previous" or "Next" buttons are clicked', () => {
    const onPageChangeMock = jest.fn();
    const { getByText } = render(
      <Pagination
        currentPage={5}
        totalPages={10}
        onPageChange={onPageChangeMock}
      />
    );

    const previousButton = getByText("Previous");
    const nextButton = getByText("Next");

    fireEvent.click(previousButton);
    fireEvent.click(nextButton);

    expect(onPageChangeMock).toHaveBeenCalledTimes(2);
    expect(onPageChangeMock).toHaveBeenCalledWith(4);
    expect(onPageChangeMock).toHaveBeenCalledWith(6);
  });
});
