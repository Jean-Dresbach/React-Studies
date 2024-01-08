import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background-color: ${({ theme }) => theme.colors.bodyBackground};
        font-family: sans-serif;
        color: ${({ theme }) => theme.colors.text};
        max-width: 1200px;
        margin: auto;
        box-shadow: 0 0 21px 10px rgba(0, 0, 0, 0.5);
    }

    h1, h2 {
        font-family: 'Tangerine', cursive, sans-serif;
        color: ${({ theme }) => theme.colors.title};
        font-size: 80px;
        text-align: center;
    }
`
