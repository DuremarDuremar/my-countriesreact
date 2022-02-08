import {
  createAction,
  createReducer,
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";

interface DefaultState {
  loading: boolean;
  data: any[];
  error: string;
}

const initialState: DefaultState = {
  loading: false,
  data: [],
  error: "",
};

export const allSlice = createSlice({
  name: "all",
  initialState,
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

export const allReducer = allSlice.reducer;
