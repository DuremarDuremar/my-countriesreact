import styled from "styled-components";
import { Link } from "react-router-dom";

export const Country = styled.article`
  width: 208px;
  cursor: pointer;
  margin: 0px auto;
  position: relative;
  height: 225px;
  padding: 5px 0 7px;

  :hover {
    box-shadow: inset -3px -3px 3px 0 rgba(0, 0, 0, 0.5),
      inset 3px 3px 3px 0 rgba(0, 0, 0, 0.5);
  }

  div {
    padding: 8px 4px 4px 12px;
    font-size: 12px;
    line-height: 1.4;
    position: relative;
  }
  h5 {
    font-size: 13px;
    margin-bottom: 4px;
  }
  h6 {
    font-size: 13px;
    font-weight: normal;
  }
  i {
  }
  img {
    width: 100%;
    height: 120px;
    object-fit: cover;
  }
`;

export const BordersWrapper = styled.p<{
  red: boolean;
}>`
  display: inline;
  color: ${(props) => props.red === true && "red"};
`;

export const LinkWrapper = styled(Link)``;
