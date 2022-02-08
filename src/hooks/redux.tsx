import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import { TypeDispatch, RootState } from "../store/store";

export const useTypeDispatch = () => useDispatch<TypeDispatch>();
export const useTypeSelector: TypedUseSelectorHook<RootState> = useSelector;
