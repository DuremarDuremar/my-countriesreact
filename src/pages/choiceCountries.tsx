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
  BorderLink,
} from "../styles/choiceStyle";
import { useTypeSelector } from "../hooks/redux";
import Spinner from "../utils/spinner";
import { IName } from "../types";

const ChoiceCountries: FC = () => {
  let { id = "country" } = useParams<string>();

  const { data, loading } = useTypeSelector((state) => state.nameReducer);

  const array = useTypeSelector((state) => state.allReducer.data);

  const [state, setState] = useState<IName | null>(null);

  // console.log(array);

  const dispatch = useTypeDispatch();

  useEffect(() => {
    dispatch(fetchName(id));
  }, [id, dispatch]);

  useEffect(() => {
    if (data.length) {
      setState(data[0]);
    }
  }, [data]);

  // поиск название страны по ссылки
  const arrayFilter =
    state &&
    array.filter((item) => {
      return state.borders ? state.borders.includes(item.cca3) : null;
    });

  console.log(state);

  return (
    <Content>
      <>
        {loading ? (
          <Spinner choice />
        ) : (
          <Flag>
            <Back to={`/`}>
              <button>
                <i className="fas fa-long-arrow-alt-left"></i>
                <span> Back</span>
              </button>
            </Back>
            <div>
              {state && <img src={state.flags.png} alt={state.name.common} />}
            </div>
          </Flag>
        )}

        {loading ? (
          <Spinner choice />
        ) : (
          <Card>
            <Name>{state && state.name.common}</Name>
            <Info>
              {state && (
                <>
                  <li>
                    <strong>Native Name</strong>:{" "}
                    {state &&
                      state.name.nativeName[
                        Object.keys(state.name.nativeName)[0]
                      ].common}
                  </li>
                  <li>
                    <strong>Top Level Domain</strong>:{" "}
                    {state.tld && state.tld[0]}
                  </li>
                  <li>
                    <strong>Population</strong>: {state && state.population}
                  </li>
                  <li>
                    <strong>Currencies</strong>:{" "}
                    {state &&
                      state.currencies[Object.keys(state.currencies)[0]].name}
                  </li>
                  <li>
                    <strong>Region</strong>: {state && state.region}
                  </li>
                  <li>
                    <strong>Languages</strong>:{" "}
                    {state && Object.values(state.languages)[0]}
                  </li>
                  <li>
                    <strong>Sub Region</strong>: {state && state.subregion}
                  </li>
                  <li>
                    <strong>Capital</strong> {state && state.capital}
                  </li>
                </>
              )}
            </Info>
            <Borders>
              <div>
                <strong>Border Countries</strong>:
              </div>
              <div>
                {arrayFilter && arrayFilter.length
                  ? arrayFilter.map((item, index) => (
                      <BorderLink key={index} to={`/${item.cca3}`}>
                        <button>{item.name.common}</button>
                      </BorderLink>
                    ))
                  : "..."}
              </div>
            </Borders>
          </Card>
        )}
      </>
    </Content>
  );
};

export default ChoiceCountries;
