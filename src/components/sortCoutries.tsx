import React, { FC } from "react";
import Select from "react-select";

import { SelectWrapper } from "../styles/mainStyle";
import { IOption } from "../types";

interface IProps {
  setSortOption: React.Dispatch<React.SetStateAction<IOption | null>>;
}

const SortCountries: FC<IProps> = ({ setSortOption }) => {
  const options = [
    { value: "name", label: "A-Z" },
    { value: "population", label: "Population" },
    { value: "area", label: "Area" },
    { value: "bordering", label: "Bordering Countries" },
  ];

  return (
    <SelectWrapper>
      <Select
        classNamePrefix="Select"
        defaultValue={{ value: "", label: "Sort by" }}
        onChange={setSortOption}
        options={options}
      />
    </SelectWrapper>
  );
};

export default SortCountries;
