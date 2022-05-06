import { createGlobalStyle } from "styled-components";


const theme = {
  color: {
    primary: '#490959',
    secondary: '#31DA2D',
    white: '#ffffff',
    tertiary: '#060f40',
  },
  font: {
    family: "'Montserrat', sans-serif",
    size: {
      extraSmall: '14px',
      small: '16px',
      medium: '18px',
      large: '20px',
      extraLarge: '24px',
    }
  },
  breakpoint: {
    mobile: '375px',
    smobile: '350px',
    tablet: '600px',
    laptop: '1300px',
    desktop: '1600px',
    largemobile: '800px',

    
  },
};

const GlobalStyle = createGlobalStyle`
  :root {
    --primary-color: #490959;
    --secondary-color: #31DA2D;
    --white-color: #ffffff;
    --tertiary-color: #060f40;
    /* --primary-color-rgb: 23,155,255; */
}
  }
    
  *, *:before, *:after{
    box-sizing: border-box;
  }

  html{
    font-size: 16px;
    scroll-behavior: smooth;
  
  }

  body {
    -webkit-scroll-behaviour:smooth;
    background-color: white;
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
    line-height: 1.7em;
    -webkit-font-smoothing: antialiased;
    margin: 0;
    padding: 0;
  }

  html, body {
    margin: 0;
    padding: 0;
    overflow-x: hidden; 
    scroll-behavior: smooth;  

  }

  a, p {
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
  }
  h1, h2, h3, h4, h5, h6 {
    font-family: 'Montserrat', sans-serif;
    font-weight: 700;
  }

`;
// const config: ThemeConfig = {
//   initialColorMode: "light",
//   useSystemColorMode: false,
// };

// 3. extend the theme
// const theme = extendTheme({ config });

export {theme, GlobalStyle };
