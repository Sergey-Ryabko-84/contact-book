import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`
    body {
    margin: 0;
    color: #272a30;
    font-family: -apple-system, BlinkMacSystemFont, 'Roboto', sans-serif;
    /* 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', */
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    }

    code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
        monospace;
    }

    h1, h2, h3, h4, h5, h6, p, ul, ol {
        margin: 0;
    }

    ul, ol {
        list-style: none;
    }

    a {
        text-decoration: none;
        color: currentColor;
    }

    img {
        display: block;
        max-width: 100%;
        height: auto;
    }

    button {
        cursor: pointer;
    }
`;
