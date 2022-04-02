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

test("renders text", () => {
  renderWithRedux(<App />);

  expect(screen.getByText("Where in the world?")).toBeInTheDocument();
  // expect(screen.queryByText("Sort by")).toBeNull();
});

test("renders text2", async () => {
  renderWithRedux(<App />);

  expect(await screen.findByText("Afghanistan")).toBeInTheDocument();
});
