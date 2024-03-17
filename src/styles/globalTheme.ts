import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${(props) => props.theme.product.blueDark};
  }

  body {
    background: ${(props) => props.theme.base["gray-600"]};
    color: ${(props) => props.theme.base["gray-100"]};
  }

  body, input, textarea, button {
    font-family: 'inter', sans-serif;
    font-weight: ${(props) => props.theme.typography.weights.regular};
    font-size: ${(props) => props.theme.typography.sizes.ST};
  }



`;
