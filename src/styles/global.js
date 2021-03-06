import { createGlobalStyle} from 'styled-components';

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    html, body, #root{
        min-height: 100%;
    }

    body{
        /*background-image: linear-gradient(to bottom right, #283048, #859398);*/
        background: linear-gradient(to bottom right,  #000, #0D1B2A, #1B263B, #778DA9, #E0E1DD); /* W3C */
        -webkit-font-smoothing: antialiased !important;
    }

    body, input, button{
        color: #222;
        font-size: 14px;
        font-family: Arial, Helvetica, sans-serif
    }

    button{
        cursor: pointer;
    }
`;
