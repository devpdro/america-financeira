import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: none;
        font-family: 'Satoshi', sans-serif;
        scroll-behavior: smooth;
    }

    body {
        scroll-behavior: smooth;
        overflow-x: hidden;
        -webkit-user-select: none;
        /* Safari */
        -moz-user-select: none;
        /* Firefox */
        -ms-user-select: none;
        /* IE 10+ */
        user-select: none;
    }

    img {
        background-size: cover;
        object-fit: cover;
    }

    a {
        text-decoration: none;
    }
`
