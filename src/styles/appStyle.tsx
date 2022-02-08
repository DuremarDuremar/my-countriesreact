import styled, { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`

* {
  padding: 0;
  margin: 0;
  border: 0;
  user-select: none;
  
}
body {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  
a {
  text-decoration: none;
}
ul li {
  list-style: none;
}
button {
  outline: none;
  cursor: pointer;
}
input{
  outline: none;
}
}
`;

export const Content = styled.div<{
  theme: boolean;
}>`
  max-width: 1366px;
  min-height: 100vh;

  margin: 0px auto;
  font-family: "Nunito Sans", sans-serif;
  background-color: ${(props) =>
    props.theme === true ? "hsl(207, 26%, 17%)" : "hsl(0, 0%, 98%)"};
  color: ${(props) =>
    props.theme === true ? "hsl(0, 0%, 100%)" : "hsl(200, 15%, 8%)"};
  transition: background-color 0.8s ease-in-out;

  main {
    position: relative;
  }

  header {
    background-color: ${(props) =>
      props.theme === true ? "hsl(209, 23%, 22%)" : "hsl(0, 0%, 100%)"};
    color: ${(props) =>
      props.theme === true ? "hsl(0, 0%, 100%)" : "hsl(200, 15%, 8%)"};
    transition: all 0.8s ease-in-out;
  }

  article {
    background-color: ${(props) =>
      props.theme === true ? "hsl(209, 23%, 22%)" : "hsl(0, 0%, 100%)"};
    color: ${(props) =>
      props.theme === true ? "hsl(0, 0%, 100%)" : "hsl(200, 15%, 8%)"};
    transition: all 0.9s ease-in-out;
  }

  ul {
    background-color: ${(props) =>
      props.theme === true ? "hsl(209, 23%, 22%)" : "hsl(0, 0%, 100%)"};
    transition: all 0.9s ease-in-out;
  }

  input {
    background-color: ${(props) =>
      props.theme === true ? "hsl(209, 23%, 22%)" : "hsl(0, 0%, 100%)"};
    color: ${(props) =>
      props.theme === true ? "hsl(0, 0%, 100%)" : "hsl(200, 15%, 8%)"};
    transition: all 0.9s ease-in-out;
  }

  .Select__control {
    background-color: ${(props) =>
      props.theme === true ? "hsl(209, 23%, 22%)" : "hsl(0, 0%, 100%)"};
    transition: all 0.9s ease-in-out;
  }
  .Select__single-value {
    color: ${(props) =>
      props.theme === true ? "hsl(0, 0%, 100%)" : "hsl(200, 15%, 8%)"};
    transition: all 0.9s ease-in-out;
  }
  .Select__control {
    height: 34px;
    width: 100%;
    border: 0;
    border-radius: 0;
    cursor: pointer;
  }

  .Select__control:hover {
    border-color: #a1a1a1;
  }

  .Select__value-container {
    padding: 2px 12px;
  }
  .Select__input-container {
    margin: 0;
  }
  .Select__control--is-focused {
    box-shadow: 0 0 0 1px black;
    outline: none;
  }

  .Select__indicator-separator {
    display: none;
  }

  .Select__menu {
    background-color: ${(props) =>
      props.theme === true ? "hsl(209, 23%, 22%)" : "hsl(0, 0%, 100%)"};
    color: ${(props) =>
      props.theme === true ? "hsl(0, 0%, 100%)" : "hsl(200, 15%, 8%)"};
  }
  .Select__option {
    :active {
      background-color: red;
    }
  }
`;
