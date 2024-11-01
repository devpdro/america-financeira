import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'Satoshi';
        src: 
            url('../assets/fonts/Satoshi-Variable.woff2') format('woff2'),
            url('../assets/fonts/Satoshi-Variable.woff') format('woff'),
            url('../assets/fonts/Satoshi-Variable.ttf') format('truetype');
        font-weight: 300 900;
        font-display: swap;
        font-style: normal;
    }

    * {
        margin: 0;
        padding: 0;
        border: 0;
        box-sizing: border-box;
    }

    body {
        font-family: 'Satoshi';  
        scroll-behavior: smooth;
        overflow-x: hidden;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }

    input,
    button {
        border: 0;
        outline: 0;
        background: none;
        font-family: 'Satoshi';
        line-height: 1.48;
    }

    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 700;
    }

    a {
        text-decoration: none;
        background: none;
        cursor: pointer;
        border: 0;
        outline: 0;
    }

    button {
        cursor: pointer;
        border: 0;
    }

    a,
    button {
        -webkit-tap-highlight-color: transparent;
    }

    ul,
    li,
    p {
        list-style: none;
        text-align: left;
        padding: 0;
        margin-bottom: 0;
    }
`

export default GlobalStyle
