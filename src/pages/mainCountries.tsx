import { FC, useState, useEffect, useCallback } from "react";
import chunk from "chunk";
import sortBy from "lodash.sortby";
import { useDebounce } from "use-debounce";
import { matchSorter } from "match-sorter";

import SearchCountries from "../components/searchCountries";
import RegionCountries from "../components/regionCountries";
import SortCountries from "../components/sortCoutries";
import PaginationCountries from "../components/paginationCountries";
import { Content, Options, Container, Country } from "../styles/mainStyle";
import { IItem, IOption } from "../types";

import { useTypeSelector } from "../hooks/redux";

const MainCountries: FC = () => {
  const { data, loading } = useTypeSelector((state) => state.allReducer);

  const [items, setItems] = useState<IItem[]>([]);
  const [page, setPage] = useState<number>(0);
  const [search, setSearch] = useState<string>("");
  const [regionOption, setRegionOption] = useState<IOption | null>(null);
  const [sortnOption, setSortOption] = useState<IOption | null>(null);

  const [value] = useDebounce(search, 1000);

  //сортировка массива
  const sortItems = (array: IItem[], sortnOption: IOption | null) => {
    if (sortnOption) {
      return sortnOption.value === "area"
        ? sortBy(array, ["area"]).reverse()
        : sortnOption.value === "population"
        ? sortBy(array, ["population"]).reverse()
        : sortnOption.value === "bordering"
        ? sortBy(array, [
            function (item) {
              return item.borders.length;
            },
          ]).reverse()
        : matchSorter(array, value, { keys: ["name.common"] });
    } else {
      return array;
    }
  };

  // if (items.length) {
  //   console.log(sortBy(items, ["population"]).reverse());
  //   console.log(sortBy(items, ["area"]).reverse());
  //   console.log(
  //     sortBy(items, [
  //       function (item) {
  //         return item.borders.length;
  //       },
  //     ]).reverse()
  //   );
  // }

  // фильтрация массива
  useEffect(() => {
    if (data.length) {
      setItems(data);
      setPage(0);
      if (regionOption && regionOption.value !== "world") {
        setItems((items) =>
          matchSorter(
            items.filter((item) => {
              return item.region.toLowerCase() === regionOption.value;
            }),
            value,
            { keys: ["name.common"] }
          )
        );
      } else {
        setItems((items) =>
          matchSorter(items, value, { keys: ["name.common"] })
        );
      }
    }
  }, [data, regionOption, value]);

  return (
    <Content>
      <Options>
        <SearchCountries search={search} setSearch={setSearch} />
        <RegionCountries
          regionOption={regionOption}
          setRegionOption={setRegionOption}
        />
        <SortCountries setSortOption={setSortOption} />
      </Options>
      <Container>
        {loading
          ? "loading"
          : (items.length &&
              chunk(sortItems(items, sortnOption), 8)[page].map(
                (item: IItem) => {
                  console.log(item.borders);

                  return renderCountry(item, sortnOption);
                }
              )) ||
            "loading"}
      </Container>
      <PaginationCountries items={items} setPage={setPage} page={page} />
    </Content>
  );
};

export default MainCountries;

const borderLength = (borders: string[]) => {
  return <i>{borders.length}</i>;
};

const renderCountry = (item: IItem, sortnOption: IOption | null) => {
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
          <strong>Capital:</strong> {item.capital || "..."}
        </p>
      </div>
    </Country>
  );
};

// items.length &&
//           chunk(Array.from([...new Array(items.length)].keys()), 8)[0].map(
//             (n) => {
//               return items[n].name.common;
//             }
//           )

// item.name.common.toLowerCase().includes(value.toLowerCase())
