import React, { FC, useState, useEffect } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";

import { fetchAll } from "./store/actions";
import MainCountries from "./pages/mainCountries";
import ChoiceCountries from "./pages/choiceCountries";
import HeaderCountries from "./components/headerCountries";
import { useTypeDispatch } from "./hooks/redux";

import { Global, Content } from "./styles/appStyle";

const App: FC = () => {
  const dispatch = useTypeDispatch();
  const [theme, setTheme] = useState<boolean>(true);

  useEffect(() => {
    dispatch(fetchAll());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Global />
      <Content theme={theme}>
        <HeaderCountries setTheme={setTheme} theme={theme} />

        <Routes>
          <Route path="/" element={<MainCountries />} />
          <Route path="/:id" element={<ChoiceCountries />} />
        </Routes>
      </Content>
    </BrowserRouter>
  );
};

export default App;
