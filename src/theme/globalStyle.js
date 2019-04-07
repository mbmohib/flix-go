import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { MuiThemeProvider } from '@material-ui/core/styles';

import theme from './theme';
import materialTheme from './materialTheme';

const Style = createGlobalStyle`

    @import url('https://fonts.googleapis.com/css?family=Josefin+Sans:300,400');
    @import url('https://fonts.googleapis.com/css?family=Roboto:300,400');

    * {
        box-sizing: border-box;
    }

    body {
        padding: 0;
        margin: 0;
        font-family: ${props => props.theme.normalFont};
        background: ${props => props.theme.bodyColor};
        color: ${props => props.theme.fontColor};
        font-size: 1rem;
        line-height: 1.5;
    }

    h1, h2, h3, h4, h5, h6 {
        margin: 0;
        padding: 0;
    }

    figure {
        margin: 0;
    }

    img {
        max-width: 100%;
        height: auto;
    }

    ul {
        margin: 0;
        padding: 0;
        
        li {
            list-style: none;
        }
    }

    a {
        text-decoration: none;
        transition: 0.4s ease;

        :focus {
            text-decoration: none;
        }
    }

    .wrapper {
        display: flex;
        flex-direction: column;
        min-height: 100vh;

        main {
            flex-grow: 1;
        }

    }
`;

const GlobalStyle = props => {
    return (
        <MuiThemeProvider theme={materialTheme}>
            <ThemeProvider theme={theme}>
                <React.Fragment>
                    <Style />
                    {props.children}
                </React.Fragment>
            </ThemeProvider>
        </MuiThemeProvider>
    );
};

export default GlobalStyle;
