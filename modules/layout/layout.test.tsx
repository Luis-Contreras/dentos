import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Layout from ".";

const renderComponentMock = (component: string) => {
  return <>this is a {component} component</>;
};

test("render header props", () => {
  render(<Layout header={renderComponentMock("header")} />);
  const getLayoutByText = screen.queryByText("this is a header component");
  expect(getLayoutByText).toBeInTheDocument();
});

test("render body props", () => {
  render(<Layout body={renderComponentMock("body")} />);
  const getLayoutByText = screen.queryByText("this is a body component");
  expect(getLayoutByText).toBeInTheDocument();
});

test("render Footer props", () => {
  render(<Layout footer={renderComponentMock("footer")} />);
  const getLayoutByText = screen.queryByText("this is a footer component");
  expect(getLayoutByText).toBeInTheDocument();
});
