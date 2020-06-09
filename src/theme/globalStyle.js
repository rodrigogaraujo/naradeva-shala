import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`
    *{
        margin:0;
        padding:0;
        outline: none;
        font-family: 'Open Sans', sans-serif;
        box-sizing: border-box;
    }
    button{
        cursor: pointer;
    }

    :root{
        --primary: #800C20;
        --button-blue: #318597;
        --icons-color: #BA4049;
        --font-color: #9B1D31;
        --button-orange: #DF6116;
    }
`;

export default Global;
