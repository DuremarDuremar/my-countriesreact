import React, { FC, useState } from "react";

import { IItem, IOption } from "../types";
import { Country, BordersWrapper, LinkWrapper } from "../styles/itemStyle";

interface IProps {
  item: IItem;
  sortnOption: IOption | null;
}

const ItemCountries: FC<IProps> = ({ item, sortnOption }) => {
  const [scan, setScan] = useState(true);

  const borderLength = (borders: string[]) => {
    return borders.length > 6 ? (
      <BordersWrapper
        red={scan}
        onClick={(e) => {
          setScan(!scan);
          e.preventDefault();
        }}
      >
        {borders.length}
        <i> ...</i>
      </BordersWrapper>
    ) : (
      <>
        {borders.length > 1 ? <br /> : null}
        {borders.length
          ? borders.map((item, index) => {
              return (
                <span key={index} onClick={(e) => e.preventDefault()}>
                  {" "}
                  {item}
                </span>
              );
            })
          : "..."}
      </>
    );
  };

  return (
    <LinkWrapper to={`/${item.cca3}`}>
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
            <h6 onClick={(e) => e.preventDefault()}>
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
    </LinkWrapper>
  );
};

export default ItemCountries;
