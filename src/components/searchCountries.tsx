import React, { FC } from "react";
import { Content } from "../styles/searchStyle";

interface IProps {
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  search: string;
}

const SearchCountries: FC<IProps> = ({ setSearch, search }) => {
  return (
    <Content>
      <i className="fas fa-search"></i>
      <input
        type="text"
        placeholder="Search for a country"
        defaultValue={""}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
    </Content>
  );
};

export default SearchCountries;
