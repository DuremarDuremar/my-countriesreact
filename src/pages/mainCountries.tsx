import { FC, useState, useEffect, useCallback } from "react";
import chunk from "chunk";
import sortBy from "lodash.sortby";
import { useDebounce } from "use-debounce";
import { matchSorter } from "match-sorter";
import { useMediaQuery } from "react-responsive";
import { useErrorBoundary } from "use-error-boundary";

import SearchCountries from "../components/searchCountries";
import RegionCountries from "../components/regionCountries";
import SortCountries from "../components/sortCoutries";
import PaginationCountries from "../components/paginationCountries";
import ItemCountries from "../components/itemCountries";
import { Content, Options, Container } from "../styles/mainStyle";
import { IItem, IOption } from "../types";
import Spinner from "../utils/spinner";
import { useTypeSelector } from "../hooks/redux";

const MainCountries: FC = () => {
  const { data, loading } = useTypeSelector((state) => state.allReducer);

  const res950 = useMediaQuery({ query: "(min-width: 950px)" });
  const res730 = useMediaQuery({ query: "(min-width: 730px)" });
  const res520 = useMediaQuery({ query: "(min-width: 520px)" });

  const [items, setItems] = useState<IItem[]>([]);
  const [page, setPage] = useState<number>(0);
  const [search, setSearch] = useState<string>("");
  const [regionOption, setRegionOption] = useState<IOption | null>(null);
  const [sortnOption, setSortOption] = useState<IOption | null>(null);
  const [num, setNum] = useState<number>(8);

  const [value] = useDebounce(search, 1000);
  const { ErrorBoundary } = useErrorBoundary();

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

  let res = !res950 && res730 ? 9 : 8;

  // console.log("ref", ref);

  return (
    <Content data-testid="main">
      <Options>
        {loading ? (
          <Spinner />
        ) : (
          <ErrorBoundary
            render={() => (
              <SearchCountries search={search} setSearch={setSearch} />
            )}
            renderError={({ error }) => (
              <p>An error has been caught: {error.message}</p>
            )}
          />
        )}
        {loading ? (
          <Spinner />
        ) : (
          <ErrorBoundary
            render={() => (
              <RegionCountries
                regionOption={regionOption}
                setRegionOption={setRegionOption}
              />
            )}
            renderError={({ error }) => (
              <p>An error has been caught: {error.message}</p>
            )}
          />
        )}
        {loading ? (
          <Spinner />
        ) : (
          <ErrorBoundary
            render={() => <SortCountries setSortOption={setSortOption} />}
            renderError={({ error }) => (
              <p>An error has been caught: {error.message}</p>
            )}
          />
        )}
      </Options>
      <Container>
        {loading ? (
          <Spinner />
        ) : (
          (items.length &&
            chunk(sortItems(items, sortnOption), res520 ? res : num)[page].map(
              (item: IItem, index: number) => {
                return (
                  <ErrorBoundary
                    key={item.name.common}
                    render={() => (
                      <ItemCountries
                        item={item}
                        sortnOption={sortnOption}
                        index={index}
                        num={num}
                        setNum={setNum}
                      />
                    )}
                    renderError={({ error }) => (
                      <p>An error has been caught: {error.message}</p>
                    )}
                  />
                );
              }
            )) ||
          "no"
        )}
      </Container>
      {loading ? (
        <Spinner />
      ) : (
        res520 && (
          <ErrorBoundary
            render={() => (
              <PaginationCountries
                items={items}
                setPage={setPage}
                page={page}
              />
            )}
            renderError={({ error }) => (
              <p>An error has been caught: {error.message}</p>
            )}
          />
        )
      )}
    </Content>
  );
};

export default MainCountries;

// items.length &&
//           chunk(Array.from([...new Array(items.length)].keys()), 8)[0].map(
//             (n) => {
//               return items[n].name.common;
//             }
//           )

// item.name.common.toLowerCase().includes(value.toLowerCase())
