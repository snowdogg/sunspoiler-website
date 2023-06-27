import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Archivo+Black&display=swap');
  
  /* You can set the font as default for the entire body */
  body {
    font-family: 'Archivo Black', sans-serif;
    font-weight: 400;
  }
`;

export default GlobalStyles;