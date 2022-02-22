import React, { FC, useState, useEffect } from "react";
import { useParams } from "react-router";

import { fetchName } from "../store/actions";
import { useTypeDispatch } from "../hooks/redux";
import {
  Content,
  Flag,
  Card,
  Back,
  Info,
  Name,
  Borders,
} from "../styles/choiceStyle";
import { useTypeSelector } from "../hooks/redux";
import { IName } from "../types";

const ChoiceCountries: FC = () => {
  let { id = "country" } = useParams<string>();

  const { data, loading } = useTypeSelector((state) => state.nameReducer);

  const [state, setState] = useState<IName | null>(null);

  console.log(data);
  console.log(state);

  const dispatch = useTypeDispatch();

  useEffect(() => {
    dispatch(fetchName(id));
  }, [id, dispatch]);

  useEffect(() => {
    if (data.length) {
      setState(data[0]);
    }
  }, [data]);

  return (
    <Content>
      {loading ? (
        "Loading"
      ) : (
        <>
          <Flag>
            <Back></Back>
            <div>
              {state && <img src={state.flags.png} alt={state.name.common} />}
            </div>
          </Flag>
          <Card>
            <Name></Name>
            <Info></Info>
            <Borders></Borders>
          </Card>
        </>
      )}
    </Content>
  );
};

export default ChoiceCountries;
