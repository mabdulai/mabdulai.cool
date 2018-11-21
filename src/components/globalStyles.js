import { injectGlobal } from 'styled-components';

injectGlobal`
  * {
    border: none;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html,
  body,
  a,
  a:hover,
  a:active,
  a:visited {
    text-decoration: none;
    color: inherit;
  }
`;
