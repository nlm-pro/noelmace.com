import {css} from 'lit';

export const homeStyles = css`
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  ol,
  ul {
    margin: 0;
  }

  h1 {
    font-size: 20px;
    font-weight: 800;
    padding: 1rem;
  }

  h2 {
    font-size: 16px;
    font-weight: 700;
    padding: 1rem 0;
  }

  h1:first-child, h2:first-child {
    padding-top: 0;
  }

  a {
    color: var(--link-color);
  }
  
  * {
    box-sizing: inherit;
  }

  .screen-reader-text {
    border: 0;
    clip: rect(1px, 1px, 1px, 1px);
    height: 1px;
    overflow: hidden;
    padding: 0;
    position: absolute !important;
    width: 1px;
  }
`;
