import React, { FC } from "react";
import Select from "react-select";

import { SelectWrapper } from "../styles/mainStyle";
import { IOption } from "../types";

interface IProps {
  setRegionOption: React.Dispatch<React.SetStateAction<IOption | null>>;
  regionOption: IOption | null;
}

const RegionCountries: FC<IProps> = ({ regionOption, setRegionOption }) => {
  const options = [
    { value: "world", label: "All World" },
    { value: "africa", label: "Africa" },
    { value: "americas", label: "America" },
    { value: "asia", label: "Asia" },
    { value: "europe", label: "Europe" },
    { value: "oceania", label: "Oceania" },
  ];

  return (
    <SelectWrapper>
      <Select
        classNamePrefix="Select"
        defaultValue={{ value: "", label: "Filter by Region" }}
        onChange={setRegionOption}
        options={options}
      />
    </SelectWrapper>
  );
};

export default RegionCountries;
