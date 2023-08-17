import {css} from 'lit';

export const resumeStyles = css`
  @media print {
    * {
      box-sizing: border-box;
    }

    a {
      text-decoration: none;
      color: inherit;
    }
  }

  @media screen and (max-width: 786px) {
    section > h2 {
      text-align: center;
    }
  }
`;
