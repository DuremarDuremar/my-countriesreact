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
  justify-content: start;
  align-items: center;
  padding: 0 25px 0 10px;
  div {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 20%;
  }
  img {
    box-shadow: rgba(0, 0, 0, 0.4) 5px 5px, rgba(0, 0, 0, 0.3) 10px 10px,
      rgba(0, 0, 0, 0.2) 15px 15px, rgba(0, 0, 0, 0.1) 20px 20px,
      rgba(0, 0, 0, 0.05) 25px 25px;
    display: block;
    max-width: 440px;
    max-height: 300px;
    background-size: cover;
    width: 100%;
  }
`;

export const Back = styled.button`
  display: block;
  width: 50px;
  height: 20px;
`;

export const Card = styled.section`
  flex: 0 0 50%;
  padding: 0 10px 0 25px;
`;

export const Name = styled.div``;

export const Info = styled.div``;

export const Borders = styled.div``;
