import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export default createGlobalStyle`
    ${reset};
    @import url('https://fonts.googleapis.com/css?family=Open+Sans:400,500,600,700');

    *{
        box-sizing: border-box;
    }
    body {
        width:100%;
        height:100%;
        background-color:#f4f6fc;
        color:#262626;
        font-size:14px;
        font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        @media screen and (max-width:768px) {   
        overflow-x:hidden;
        }
    }
    a {
        color:#3897f0;
        text-decoration:none;
    }
    input{
        outline:none;
    }
`;
