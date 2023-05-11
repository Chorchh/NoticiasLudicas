import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
        text-decoration: none;
        color: #fff;
        font-family: "Nunito", sans-serif;
    }

    html {
        scroll-behavior: smooth;
        scroll-padding-top: 100px;
    }
`;
