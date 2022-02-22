import styled from "styled-components";

export const Content = styled.main`
  /* height: 90vh; */
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
  grid-gap: 15px;
`;

export const SelectWrapper = styled.div`
  > div {
    width: 150px;
    font-size: 12px;
  }
`;
