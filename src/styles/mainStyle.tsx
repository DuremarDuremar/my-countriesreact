import styled from "styled-components";
import { respon } from "../variables";

export const Content = styled.main`
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

export const Options = styled.div`
  height: 75px;
  display: flex;
  justify-content: space-around;
  align-items: center;

  @media ${respon.Max729} {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 10px;
    height: 115px;
    label {
      grid-column: span 2 / auto;
      margin: 0px auto;
    }
    div {
      margin: 0px auto;
    }
  }
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  @media ${respon.Max949} {
    grid-template-columns: repeat(3, 1fr);
  }
  @media ${respon.Max729} {
    grid-template-columns: repeat(2, 1fr);
  }
  grid-gap: 15px;
`;

export const SelectWrapper = styled.div`
  > div {
    width: 150px;
    font-size: 12px;
  }
`;
