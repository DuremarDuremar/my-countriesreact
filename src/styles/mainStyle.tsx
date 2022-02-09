import styled from "styled-components";

export const Content = styled.main`
  height: 90vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

export const Options = styled.div`
  height: 80px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
`;

export const Country = styled.article`
  width: 200px;
  cursor: pointer;
  margin: 0px auto;
  position: relative;
  height: 225px;

  :hover {
    box-shadow: inset -3px -3px 3px 0 rgba(0, 0, 0, 0.5),
      inset 3px 3px 3px 0 rgba(0, 0, 0, 0.5);
  }

  div {
    padding: 8px 4px 4px 12px;
    font-size: 12px;
    line-height: 1.4;
  }
  h5 {
    font-size: 13px;
    margin-bottom: 4px;
  }

  img {
    width: 100%;
    height: 120px;
    object-fit: cover;
  }
  i {
    color: red;
  }
`;

export const SelectWrapper = styled.div`
  > div {
    width: 150px;
    font-size: 12px;
  }
`;
