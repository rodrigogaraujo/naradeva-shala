import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`
    *{
        margin:0;
        padding:0;
        outline: none;
        font-family: 'Roboto', sans-serif;
        box-sizing: border-box;
    }
    button{
        cursor: pointer;
    }

    :root{
        --primary: #800B20;
        --button-blue: #318597;
    }
`;

export default Global;
