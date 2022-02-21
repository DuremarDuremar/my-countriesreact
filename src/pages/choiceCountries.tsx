import React, { FC, useState, useEffect } from "react";
import { useParams } from "react-router";

import { fetchName } from "../store/actions";
import { useTypeDispatch } from "../hooks/redux";
import { Content } from "../styles/choiceStyle";
import { useTypeSelector } from "../hooks/redux";
import { IName } from "../types";

interface ParamTypes {
  id: string;
}

const ChoiceCountries: FC = () => {
  let { id = "country" } = useParams<string>();

  const { data, loading } = useTypeSelector((state) => state.nameReducer);

  const [state, setState] = useState<IName | {}>({});

  console.log(data);
  console.log(state);

  const dispatch = useTypeDispatch();

  useEffect(() => {
    dispatch(fetchName(id));
  }, []);

  useEffect(() => {
    if (data.length) {
      setState(data[0]);
    }
  }, [data]);

  return <Content>choiceCountries</Content>;
};

export default ChoiceCountries;
