import styled from "styled-components";

export const Content = styled.div`
  display: flex;
  overflow: hidden;
  width: 100%;
  height: calc(100% - 60px);
`;

export const Flag = styled.section`
  flex: 0 0 50%;
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
    max-width: 440px;
    max-height: 300px;
    width: 100%;
  }
`;

export const Back = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90px;
  height: 25px;
  margin-top: 10%;

  span {
    font-size: 11px;
    padding-left: 7px;
  }
  :hover {
    box-shadow: inset -3px -3px 3px 0 rgba(0, 0, 0, 0.5),
      inset 3px 3px 3px 0 rgba(0, 0, 0, 0.5);
  }
`;

export const Card = styled.section`
  flex: 0 0 50%;
  padding: 0 4vw 0 15px;
`;

export const Name = styled.div``;

export const Info = styled.ul``;

export const Borders = styled.div``;
