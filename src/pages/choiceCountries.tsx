import React, { FC, useEffect } from "react";
import { useParams } from "react-router";

import { fetchName } from "../store/actions";
import { useTypeDispatch } from "../hooks/redux";
import { Content } from "../styles/choiceStyle";

interface ParamTypes {
  id: string;
}

const ChoiceCountries: FC = () => {
  let { id = "country" } = useParams<string>();

  console.log(id);

  const dispatch = useTypeDispatch();

  useEffect(() => {
    dispatch(fetchName(id));
  }, []);

  return <Content>choiceCountries</Content>;
};

export default ChoiceCountries;
