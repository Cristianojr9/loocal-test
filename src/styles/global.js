import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }
  body {
    background: #ffffff;
    -webkit-font-smoothing: antialiased;
    scrollbar-arrow-color: #00A536;
  }
  body, input, button {
    font-family: 'Rubik', sans-serif;
  }
  button {
    cursor: pointer;
  }
`;