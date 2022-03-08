import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { allReducer, nameReducer } from "./reducer";
import logger from "redux-logger";

const rootReducer = combineReducers({ allReducer, nameReducer });

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        thunk: {
          extraArgument: "",
        },
      }).concat(logger),
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type TypeStore = ReturnType<typeof setupStore>;
export type TypeDispatch = TypeStore["dispatch"];
