import { TypeDispatch } from "./store";
import axios from "axios";
import { allSlice } from "./reducer";
import { IItem } from "../types";

export const fetchAll = () => async (dispatch: TypeDispatch) => {
  try {
    dispatch(allSlice.actions.allFetching());
    const res = await axios.get<IItem[]>(
      "https://restcountries.com/v3.1/all?fields=name,capital,population,flags,area,borders,region"
    );

    dispatch(allSlice.actions.allFetchingSuccess(res.data));
  } catch (e: any) {
    dispatch(allSlice.actions.allFetchingError(e.message));
  }
};
