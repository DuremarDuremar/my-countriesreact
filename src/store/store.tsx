import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { allReducer } from "./reducer";

const rootReducer = combineReducers({ allReducer });

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type TypeStore = ReturnType<typeof setupStore>;
export type TypeDispatch = TypeStore["dispatch"];
