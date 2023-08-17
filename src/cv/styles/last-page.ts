import {css} from 'lit';

export const lastPageStyles = css`
  .lg-2-columns {
    columns: 2;
    column-gap: 2rem;
  }

  @media screen and (max-width: 786px) {
    .lg-2-columns {
      columns: initial;
    }
  }
`;
