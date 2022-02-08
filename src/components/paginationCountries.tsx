import React, { FC } from "react";
import chunk from "chunk";

import { Content, LiPag } from "../styles/paginationStyle";
import { IItem } from "../types";

interface IProps {
  setPage: React.Dispatch<React.SetStateAction<number>>;
  page: number;
  items: IItem[];
}

const PaginationCountries: FC<IProps> = ({ items, page, setPage }) => {
  let lehgthPagination = Array.from(
    [...new Array(chunk(items, 8).length)].keys()
  );

  return (
    <Content>
      <ul>
        {page > 0 && (
          <>
            <LiPag>
              <i
                className="fas fa-angle-double-left"
                onClick={() => setPage(0)}
              ></i>
            </LiPag>

            <LiPag>
              <i
                className="fas fa-angle-left"
                onClick={() => setPage(page - 1)}
              ></i>
            </LiPag>
          </>
        )}
        {items.length
          ? lehgthPagination.map((item: number) => {
              if (item > page - 3 && item < page + 3) {
                return (
                  <LiPag key={item + 1} choice={item === page ? true : false}>
                    <i onClick={() => setPage(item)}>{item + 1}</i>
                  </LiPag>
                );
              } else return null;
            })
          : "loading"}
        {lehgthPagination.length - 1 > page && (
          <>
            <LiPag>
              <i
                className="fas fa-angle-right"
                onClick={() => setPage(page + 1)}
              ></i>
            </LiPag>

            <LiPag>
              <i
                className="fas fa-angle-double-right"
                onClick={() => setPage(lehgthPagination.length - 1)}
              ></i>
            </LiPag>
          </>
        )}
      </ul>
    </Content>
  );
};

export default PaginationCountries;
