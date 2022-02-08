import React, { FC } from "react";
import { Content } from "../styles/headerStyle";

interface IProps {
  setTheme: React.Dispatch<React.SetStateAction<boolean>>;
  theme: boolean;
}

const HeaderCountries: FC<IProps> = ({ setTheme, theme }) => {
  return (
    <Content>
      <h3>Where in the world?</h3>
      <div onClick={() => setTheme((theme) => !theme)}>
        <i
          className={theme === true ? "fas fa-sun fa-2x" : "fas fa-moon fa-2x"}
        ></i>

        <span>{theme === true ? "Light Mode" : "Dark Mode"}</span>
      </div>
    </Content>
  );
};

export default HeaderCountries;
