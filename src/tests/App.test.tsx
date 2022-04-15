import { render, screen, fireEvent } from "@testing-library/react";
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
});

// test("renders text2", async () => {
//   renderWithRedux(<App />);

//   expect(await screen.findByText("Afghanistan")).toBeInTheDocument();
// });

test("btn", async () => {
  renderWithRedux(<App />);

  const btn = await screen.findByTestId("Afghanistan");

  expect(screen.queryByTestId("card")).toBeNull();
  fireEvent.click(btn);
  expect(screen.getByTestId("card")).toBeInTheDocument();
  expect(screen.queryByTestId("main")).toBeNull();

  // const btn = screen.getAllByTestId("btn0");
});
