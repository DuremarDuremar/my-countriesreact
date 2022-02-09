import React, { FC } from "react";

import { IItem, IOption } from "../types";
import { Country, BordersWrapper } from "../styles/itemStyle";

interface IProps {
  item: IItem;
  sortnOption: IOption | null;
}

const ItemCountries: FC<IProps> = ({ item, sortnOption }) => {
  const borderLength = (borders: string[]) => {
    return borders.length > 6 ? (
      <BordersWrapper>
        {borders.length}
        <p></p>
      </BordersWrapper>
    ) : (
      <p>
        {" "}
        {borders.length
          ? borders.map((item, index) => {
              return <span key={index}> {item}</span>;
            })
          : "..."}
      </p>
    );
  };

  return (
    <Country key={item.area}>
      <img src={item.flags.svg} alt={item.name.common} />
      <div>
        <h5>{item.name.common}</h5>
        <p>
          <strong>
            {sortnOption && sortnOption.value === "area"
              ? "Area"
              : sortnOption && sortnOption.value === "bordering"
              ? "Bordering Countries"
              : "Population"}
            :
          </strong>{" "}
          {sortnOption && sortnOption.value === "area"
            ? item.area
            : sortnOption && sortnOption.value === "bordering"
            ? borderLength(item.borders)
            : item.population}
        </p>
        <p>
          <strong>Region:</strong> {item.region}
        </p>
        <p>
          <strong>Capital:</strong> {item.capital[0] || "..."}
        </p>
      </div>
    </Country>
  );
};

export default ItemCountries;
