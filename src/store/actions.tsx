import axios from "axios";

import { TypeDispatch } from "./store";
import { allSlice, nameSlice } from "./reducer";
import { IItem, IName } from "../types";

export const fetchAll = () => async (dispatch: TypeDispatch) => {
  try {
    dispatch(allSlice.actions.allFetching());
    const res = await axios.get<IItem[]>(
      "https://restcountries.com/v3.1/all?fields=name,capital,population,flags,area,borders,region,cca3"
    );

    dispatch(allSlice.actions.allFetchingSuccess(res.data));
  } catch (e: any) {
    dispatch(allSlice.actions.allFetchingError(e.message));
  }
};

export const fetchName = (id: string) => async (dispatch: TypeDispatch) => {
  try {
    dispatch(nameSlice.actions.nameFetching());
    const res = await axios.get<IName[]>(
      `https://restcountries.com/v3.1/alpha?codes=${id}`
    );

    dispatch(nameSlice.actions.nameFetchingSuccess(res.data));
  } catch (e: any) {
    dispatch(nameSlice.actions.nameFetchingError(e.message));
  }
};

// export async function fetchName() {
//   const res = await axios.get<any>(
//     "https://restcountries.com/v3.1/alpha?codes=arg"
//   );
//   return res.data;
// }
