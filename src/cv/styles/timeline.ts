import { css } from 'lit';

export const timelineStyle = css`
  * {
    box-sizing: border-box;
  }

  h2 {
    font-size: 24px;
  }

  h3 {
    font-size: 19px;
  }

  .light-icon {
    filter: invert(var(--light-item-inversion, 0));
  }

  .timeline {
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    padding: 1rem 0.5rem;
    position: relative;
    width: calc(100% - 2rem);
  }
  .timeline__event {
    display: flex;
    margin: 0.7rem 0;
    border-radius: 6px;
    align-self: center;
    width: 100%;
  }
  .mirror .timeline__event,
  .mirror .timeline__event .timeline__event__card {
    flex-direction: row-reverse;
  }
  .mirror .timeline__event .timeline__event__date {
    border-radius: 0 6px 6px 0;
  }
  .mirror .timeline__event .timeline__event__content {
    border-radius: 6px 0 0 6px;
  }
  .mirror .timeline__event .timeline__event__icon:before {
    content: '';
    width: 2px;
    background: var(--primary-color);
    position: absolute;
    top: 100%;
    left: 50%;
    right: auto;
    z-index: 0;
    transform: translateX(-50%);
  }
  .mirror .timeline__event .timeline__event__icon:after {
    content: '';
    width: 100%;
    height: 2px;
    background: var(--primary-color);
    position: absolute;
    right: 100%;
    z-index: 0;
    top: 50%;
    left: auto;
    transform: translateY(-50%);
  }
  .mirror .timeline__event .timeline__event__icon {
    margin-left: 1rem;
  }
  :not(.mirror) .timeline__event .timeline__event__icon {
    margin-right: 1rem;
  }

  .timeline__event__card {
    display: flex;
    width: calc(100% - 164px);
    flex-grow: 1;
  }
  .timeline__event__title {
    font-size: 1.2rem;
    text-transform: uppercase;
    font-weight: 600;
    color: var(--primary-color);
  }
  .timeline__event__content {
    padding: 0.7rem 1rem 0.5rem 1rem;
    border-radius: 0 6px 6px 0;
    flex-grow: 1;
    border: 1px solid var(--primary-color);
  }
  .timeline__event__date {
    color: var(--neutral-color-0);
    background: var(--primary-color);
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    padding: 0 1rem;
    border-radius: 6px 0 0 6px;
    flex-direction: column;
    width: 150px;
    flex-shrink: 0;
  }
  .timeline__event__date > * {
    width: 100%;
    text-align: center;
  }
  .timeline__event__date .company-name {
    font-weight: 600;
  }
  .timeline__event__date .company-details {
    font-style: italic;
    font-size: 0.8rem;
  }
  .timeline__event__date .dates {
    white-space: nowrap;
  }
  .timeline__event__icon {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    align-self: center;
    border-radius: 100%;
    width: 40px;
    padding: 30px;
    height: 40px;
    position: relative;
  }

  .timeline__event__icon img {
    border-radius: 100%;
    border: solid 2px var(--primary-color);
    background-color: #fff;
  }

  .timeline__event__icon:before {
    content: '';
    width: 2px;
    height: 325px;
    background: var(--primary-color);
    position: absolute;
    top: 100%;
    z-index: 0;
    left: 50%;
    transform: translateX(-50%);
  }
  .timeline__event__icon.short-line:before {
    height: 150px;
  }
  .timeline__event__icon:after {
    content: '';
    width: 100%;
    height: 2px;
    background: var(--primary-color);
    position: absolute;
    left: 100%;
    z-index: 0;
    top: 50%;
    transform: translateY(-50%);
  }
  .timeline__event__description {
    flex-basis: 60%;
  }

  .timeline__event:last-child .timeline__event__icon:before {
    content: none;
  }

  @media screen and (max-width: 786px) {
    .timeline__event,
    .timeline__event__card {
      flex-direction: column;
      align-self: center;
    }
    .timeline__event__content,
    .timeline__event__date,
    .timeline__event__card {
      width: 100%;
    }
    .timeline__event__icon,
    .timeline__event__icon:before,
    .timeline__event__icon:after {
      display: none;
    }
    .timeline__event__date {
      border-radius: 0;
      padding: 20px;
      flex-grow: 1;
    }
    .timeline__event__content {
      border-radius: 0;
    }
    .mirror .timeline__event {
      flex-direction: column;
      align-self: center;
    }
    .mirror .timeline__event .timeline__event__date {
      border-radius: 0;
      padding: 20px;
    }
    .mirror .timeline__event .timeline__event__icon {
      border-radius: 6px 6px 0 0;
      margin: 0;
    }
  }

  @media print {
    .timeline {
      break-inside: avoid;
      page-break-inside: avoid;
    }
  }
`;