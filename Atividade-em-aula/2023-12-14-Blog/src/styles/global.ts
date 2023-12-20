import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background-color: ${({ theme }) => theme.colors.background};
        font-family: "Open Sans", sans-serif;
        color: ${({ theme }) => theme.colors.text};
    }

    h1, h2, h3, h4, h5, h6 {
        font-family: "Kumbh Sans", sans-serif;
    }
`
