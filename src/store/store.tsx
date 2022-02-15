import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { allReducer, nameReducer } from "./reducer";

const rootReducer = combineReducers({ allReducer, nameReducer });

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type TypeStore = ReturnType<typeof setupStore>;
export type TypeDispatch = TypeStore["dispatch"];
