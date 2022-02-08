import React from "react";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { setupStore } from "../store/store";
import App from "../App";

const renderWithRedux = (component: any, {} = {}) => {
  return {
    ...render(<Provider store={setupStore()}>{component}</Provider>),
  };
};

test("renders learn react link", () => {
  renderWithRedux(<App />);

  expect(screen.getByText("Where in the world?")).toBeInTheDocument();
});
