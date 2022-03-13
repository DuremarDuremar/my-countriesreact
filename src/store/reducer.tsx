import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IItem, IName } from "../types";

/////////////////////////////////////////////////
interface AllState {
  loading: boolean;
  data: IItem[] | [];
  error: string;
}

const initialStateAll: AllState = {
  loading: false,
  data: [],
  error: "",
};

export const allSlice = createSlice({
  name: "all",
  initialState: initialStateAll,
  reducers: {
    allFetching(state) {
      state.loading = true;
    },
    allFetchingSuccess(state, action: PayloadAction<IItem[]>) {
      state.loading = false;
      state.data = action.payload;
      state.error = "";
    },
    allFetchingError(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

////////////////////////////////////////////////

interface NameState {
  loading: boolean;
  data: IName[] | [];
  error: string;
}

const initialStateName: NameState = {
  loading: false,
  data: [],
  error: "",
};

export const nameSlice = createSlice({
  name: "name",
  initialState: initialStateName,
  reducers: {
    nameFetching(state) {
      state.loading = true;
      state.data = [];
    },
    nameFetchingSuccess(state, action: PayloadAction<IName[]>) {
      state.loading = false;
      state.data = action.payload;
      state.error = "";
    },
    nameFetchingError(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

/////////////////////////////////////////////
export const allReducer = allSlice.reducer;
export const nameReducer = nameSlice.reducer;
