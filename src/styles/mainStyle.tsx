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
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  @media ${respon.Max949} {
    grid-template-columns: repeat(3, 1fr);
  }
  grid-gap: 15px;
`;

export const SelectWrapper = styled.div`
  > div {
    width: 150px;
    font-size: 12px;
  }
`;
