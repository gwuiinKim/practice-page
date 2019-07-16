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
        color:${props => props.theme.blackColor};
        font-size:18px;
        font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        @media screen and (max-width:768px) {   
        overflow-x:hidden;
        }
    }
    a {
        all:unset;
        cursor:pointer;
        text-decoration:none;
    }
    input{
        outline:#E0E6F7;
    }
`;
