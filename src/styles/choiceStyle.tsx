import styled from "styled-components";
import { Link } from "react-router-dom";

export const Content = styled.div`
  display: flex;
  overflow: hidden;
  width: 100%;
  height: calc(100% - 60px);
`;

export const Flag = styled.section`
  flex: 1 1 50%;
  border-right: 1px solid #fff;
  flex-direction: column;
  display: flex;
  padding: 0 15px 0 4vw;
  div {
    display: flex;
    margin-top: 10%;
  }
  img {
    box-shadow: rgba(0, 0, 0, 0.4) 5px 5px, rgba(0, 0, 0, 0.3) 10px 10px,
      rgba(0, 0, 0, 0.2) 15px 15px, rgba(0, 0, 0, 0.1) 20px 20px,
      rgba(0, 0, 0, 0.05) 25px 25px;
    display: block;
    max-width: 460px;
    max-height: 320px;
    width: 100%;
  }
`;

export const Back = styled(Link)`
  width: 90px;
  height: 30px;
  margin-top: 10%;
  button {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    :hover {
      box-shadow: inset -3px -3px 3px 0 rgba(0, 0, 0, 0.5),
        inset 3px 3px 3px 0 rgba(0, 0, 0, 0.5);
    }
  }

  span {
    font-size: 11px;
    padding-left: 7px;
  }
`;

export const Card = styled.section`
  flex: 1 1 50%;
  padding: 0 4vw 0 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Name = styled.div`
  align-self: start;
  font-size: 26px;
  font-weight: bold;
`;

export const Info = styled.ul`
  padding-top: 30px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 10px;
  li {
    max-width: 210px;
  }
  li:nth-child(6) {
    grid-row: span 3 / auto;
  }
`;

export const Borders = styled.div`
  padding-top: 30px;
  display: flex;
  div:nth-child(2) {
    padding-left: 10px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 10px;
    max-width: 440px;
  }
  strong {
    width: 150px;
  }

  button {
    height: 20px;
    width: 80px;
    font-size: 11px;
  }
`;

export const BorderLink = styled(Link)``;
