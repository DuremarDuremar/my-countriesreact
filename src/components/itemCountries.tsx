import React, { FC, useState } from "react";

import { IItem, IOption } from "../types";
import { Country, BordersWrapper } from "../styles/itemStyle";

interface IProps {
  item: IItem;
  sortnOption: IOption | null;
}

const ItemCountries: FC<IProps> = ({ item, sortnOption }) => {
  const [scan, setScan] = useState(true);

  const borderLength = (borders: string[]) => {
    return borders.length > 6 ? (
      <BordersWrapper red={scan} onClick={() => setScan(!scan)}>
        {borders.length}
        <i> ...</i>
      </BordersWrapper>
    ) : (
      <>
        {borders.length > 1 ? <br /> : null}
        {borders.length
          ? borders.map((item, index) => {
              return <span key={index}> {item}</span>;
            })
          : "..."}
      </>
    );
  };

  return (
    <Country key={item.area}>
      <img src={item.flags.svg} alt={item.name.common} />
      <div>
        <h5>{item.name.common}</h5>
        <h6>
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
        </h6>
        {!scan ? (
          <h6>
            {item.borders.map((item, index) => {
              return <span key={index}> {item}</span>;
            })}
          </h6>
        ) : (
          <>
            <h6>
              <strong>Region:</strong> {item.region}
            </h6>
            <h6>
              <strong>Capital:</strong> {item.capital[0] || "..."}
            </h6>
          </>
        )}
      </div>
    </Country>
  );
};

export default ItemCountries;
