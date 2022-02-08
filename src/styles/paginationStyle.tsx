import styled from "styled-components";

export const Content = styled.div`
  height: 30px;
  margin-top: auto;
  ul {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    max-width: 300px;
    margin: 0px auto;
    border-radius: 40%;
  }
`;
export const LiPag = styled.li<{
  choice?: boolean;
}>`
  font-weight: 600;
  cursor: pointer;
  color: ${(props) => props.choice === true && "red"};
`;
