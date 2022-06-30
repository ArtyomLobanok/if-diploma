import {createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }
  ul[class], ol[class] {
    padding: 0;
  }
  body, h1, h2, h3, h4, p, ol[class], li, figure, figcaption, blockquote, dl, dd {
    margin: 0;
  }
  body {
    min-height: 100vh;
    scroll-behavior: smooth;
    text-rendering: optimizeSpeed;
    line-height: 1.2;
  }
  ul[class], ol[class] {
    list-style: none;
  }
  a:not([class]) {
    text-decoration-skip-ink: auto;
  }
  article > * + * {
    margin-top: 1em;
  }
  input, button, textarea, select {
    font: inherit;
  }
  h1, h2, h3, h4, h5, h6 {
    margin: 0;
  }
  body, html {
    scroll-behavior: smooth;
    font-family: "Roboto", sans-serif;
    font-size: 16px;
  }
`