import styled from "styled-components";

export const Content = styled.header`
  max-width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 5vw;
  div {
    cursor: pointer;
    display: flex;
    align-items: center;
    span {
      font-size: 14px;
      padding-left: 4px;
    }
  }
`;
