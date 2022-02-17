import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IItem } from "../types";

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
    allFetchingSuccess(state, action: PayloadAction<any[]>) {
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
  data: any;
  error: string;
}

const initialStateName: NameState = {
  loading: false,
  data: null,
  error: "",
};

export const nameSlice = createSlice({
  name: "name",
  initialState: initialStateName,
  reducers: {
    nameFetching(state) {
      state.loading = true;
    },
    nameFetchingSuccess(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = action.payload;
      state.error = "No";
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
