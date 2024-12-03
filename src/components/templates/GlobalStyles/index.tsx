import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Lato';
    src: url('./Lato-Regular.ttf') format('truetype');
    font-weight: 300;
    font-style: normal;
    font-display: auto;
  }
  @font-face {
    font-family: 'Lato';
    src: url('./Lato-Bold.ttf') format('truetype');
    font-weight: 700;
    font-style: normal;
    font-display: auto;
  }
  .rightMenuList:not(:hover) .grayedIcon {
    filter: contrast(175%) brightness(50%) opacity(40%);
  }
`
export default GlobalStyle
