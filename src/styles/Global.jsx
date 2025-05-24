import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    html{
        box-sizing: border-box;
    }

    body {
        background-color: ${({ theme }) => theme.colors.bg};
        color: ${({ theme }) => theme.colors.main};
        font-family: 'Roboto', sans-serif;
    }
    
    *,*::after,*::before{
        box-sizing: inherit;
        font: inherit;
        text-transform: none;
    }
    
    ul[class],
    ol[class] {
        padding: 0;
    }
    body,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p,
    ul,
    ol,
    li,
    figure,
    figcaption,
    blockquote,
    dl,
    dd {
        margin: 0;
        padding: 0;
    }
    ul[class] {
        list-style: none;
    }
    ul, ol{
        list-style-type: none;
    }
    img {
        max-width: 100%;
        display: block;
    }

    input,
    button,
    textarea,
    select {
        font: inherit;
        border: none;
        background-color: transparent;
    }
    
    a{
        text-decoration: none;
        color: #000;
    }
`;

export default GlobalStyles;
