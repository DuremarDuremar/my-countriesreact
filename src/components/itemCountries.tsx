import React, { FC, useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

import { IItem, IOption } from "../types";
import { Country, BordersWrapper, LinkWrapper } from "../styles/itemStyle";
import { useTypeSelector } from "../hooks/redux";
import { formatSumm } from "../utils";

interface IProps {
  item: IItem;
  sortnOption: IOption | null;
  index: number;
  num: number;
  setNum: React.Dispatch<React.SetStateAction<number>>;
}

const ItemCountries: FC<IProps> = ({
  item,
  sortnOption,
  index,
  num,
  setNum,
}) => {
  const { data } = useTypeSelector((state) => state.allReducer);

  const [scan, setScan] = useState(true);

  const borderSearch = (br: string) => {
    return data
      .filter((item) => {
        return item.cca3 === br ? item.name.common : null;
      })
      .map((item) => item.name.common);
  };

  const borderLength = (borders: string[]) => {
    return borders.length > 2 ? (
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
                  {borderSearch(item)}
                </span>
              );
            })
          : "..."}
      </>
    );
  };

  const { ref, inView } = useInView({
    threshold: 0,
  });

  useEffect(() => {
    if (inView) {
      setNum((prev) => prev + prev);
    }
  }, [inView]);

  console.log(num);
  console.log("inView", inView);
  console.log(index);
  return (
    <LinkWrapper to={`/${item.cca3}`}>
      <Country key={item.area} ref={index + 1 === num ? ref : null}>
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
              : formatSumm(item.population)}
          </h6>
          {!scan ? (
            <h6 onClick={(e) => e.preventDefault()}>
              {item.borders.map((item, index) => {
                return <span key={index}> {borderSearch(item)}</span>;
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
