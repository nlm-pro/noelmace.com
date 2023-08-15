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
    font-size: 18px;
    font-weight: 800;
    padding: 1rem;
  }

  h2 {
    font-size: 16px;
    font-weight: 700;
    padding: 1rem;
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

  button {
    position: relative;
    overflow: hidden;
    transform: translate3d(0, 0, 0);
    background-color: var(--primary-color);
    color: var(--font-on-primary);
    padding: 0.5em 10px;
    border-radius: 5px;
    border: none;
  }
  
  button:hover {
    background-color: var(--button-hover-bg-color);
    box-shadow: var(--raise-4dp);
    background-color: var(--color-lvl3);
  }

  button:after {
    content: '';
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    pointer-events: none;
    background-image: radial-gradient(circle, #fff 10%, transparent 10%);
    background-repeat: no-repeat;
    background-position: 50%;
    transform: scale(10, 10);
    opacity: 0;
    transition:
      transform 200ms,
      opacity 1s;
  }

  button:active:after {
    transform: scale(0, 0);
    opacity: 0.3;
    transition: 0s;
  }
`;
