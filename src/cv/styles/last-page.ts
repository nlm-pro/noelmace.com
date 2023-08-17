import {css} from 'lit';

export const lastPageStyles = css`
  h2 {
    margin-bottom: 1rem;
  }

  li {
    margin: 0.2em 0;
  }

  .lg-2-columns {
    columns: 2;
    column-gap: 2rem;
  }

  @media screen and (max-width: 786px) {
    .lg-2-columns {
      columns: initial;
    }
  }

  @media print {
    h2 {
      margin-bottom: 3rem;
    }
  }
`;
