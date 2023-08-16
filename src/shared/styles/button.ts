import {css} from 'lit';

export const buttonSyles = css`
  button, .button {
    position: relative;
    overflow: hidden;
    transform: translate3d(0, 0, 0);
    color: var(--font-on-primary);
    border-radius: var(--action-border-radius);
    border: none;
  }

  button:hover, .button:hover {
    box-shadow: var(--raise-4dp);
  }

  button:after, .button:after {
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

  button:active:after, .button:active:after {
    transform: scale(0, 0);
    opacity: 0.3;
    transition: 0s;
  }
`;
