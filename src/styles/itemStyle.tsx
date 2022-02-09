import styled from "styled-components";

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
`;

export const BordersWrapper = styled.i`
  color: red;

  p {
    display: none;
    width: 30px;
    background-color: red;
  }
  &:hover {
    p {
      display: block;
    }
  }
`;
