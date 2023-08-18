import {html} from 'lit';
import type {ResumeWordings} from '.';

const urlLivreENI =
  'https://www.editions-eni.fr/livre/developpement-et-architecture-des-applications-web-modernes-retrouver-les-fondamentaux-9782409029523';

function dateDiff(oldDate: Date, newDate: Date = new Date()) {
  const newYear = newDate.getFullYear();
  const newMonth = newDate.getMonth();
  const oldYear = oldDate.getFullYear();
  const oldMonth = oldDate.getMonth();
  const diff = newYear - oldYear;
  if (
    oldMonth > newMonth ||
    (oldMonth == newMonth && oldDate.getDate() > newDate.getDate())
  ) {
    return diff - 1;
  }
  return diff;
}

export const xpYears = dateDiff(new Date('2009-03-01'));

export default {
  presentation: {
    name: 'Noël Macé',
    jobTitle: 'Développeur Web Senior',
    note: `${xpYears} ans d'expérience`,
    abstract: [
      `D'un naturel passionné et investi, je recherche perpétuellement de nouveaux défis techniques, intellectuels et humains.`,
      `Grâce à cela, j'ai au cours des années accumulé une expérience complète et variée dans de nombreux domaines (développement et architecture applicative, administration système et réseaux, pédagogie, management, communication, etc.).`,
      `Depuis 2014, mon focus technique se porte essentiellement sur la plateforme Web, ses outils et ses standards.`,
    ],
    langs: {
      title: 'Langues',
      content: [
        'Anglais : avancé (C1/C2)',
        'Français : natif & littéraire',
        'Espagnol: notions (A2)',
      ],
    },
    networks: {
      title: 'Réseaux',
      // title: 'Contacts',
      content: [
        // {
        //   // icon: "/images/icons/mail.svg",
        //   /* prettier-ignore */
        //   icon: html`<svg xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:cc="http://creativecommons.org/ns#" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" version="1.1" x="0px" y="0px" viewBox="0 0 100 100"><g transform="translate(0,-952.36218)"><path style="text-indent:0;text-transform:none;direction:ltr;block-progression:tb;baseline-shift:baseline;enable-background:accumulate;" d="m 8.999998,972.36219 c -2.1642,0 -4,1.83585 -4,4 l 0,52.00001 c 0,2.1641 1.8358,4 4,4 l 82.000004,0 c 2.1642,0 4,-1.8359 4,-4 l 0,-52.00001 c 0,-2.16415 -1.8358,-4 -4,-4 l -82.000004,0 z m 5.9375,6 70.125,0 -35.0625,30.06251 -35.0625,-30.06251 z m -3.9375,4.46875 21.0938,18.09376 -21.0938,21.0937 0,-39.18746 z m 78,0 0,39.18746 -21.0938,-21.0937 21.0938,-18.09376 z m -52.3438,22.03126 11.4063,9.75 a 3.0003,3.0003 0 0 0 3.875,0 l 11.4063,-9.75 21.5,21.5 -69.6876,0 21.5,-21.5 z" fill-opacity="1" stroke="none" marker="none" visibility="visible" display="inline" overflow="visible"/></g></svg>`,
        //   alt: "Email",
        //   text: "",
        //   url: "mailto:",
        // },
        // {
        //   // icon: "/images/icons/phone.svg",
        //   /* prettier-ignore */
        //   icon: html`<svg height="800px" width="800px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 202.592 202.592" xml:space="preserve"><g><g><path d="M198.048,160.105l-31.286-31.29c-6.231-6.206-16.552-6.016-23.001,0.433l-15.761,15.761 c-0.995-0.551-2.026-1.124-3.11-1.732c-9.953-5.515-23.577-13.074-37.914-27.421C72.599,101.48,65.03,87.834,59.5,77.874 c-0.587-1.056-1.145-2.072-1.696-3.038l10.579-10.565l5.2-5.207c6.46-6.46,6.639-16.778,0.419-23.001L42.715,4.769 c-6.216-6.216-16.541-6.027-23.001,0.433l-8.818,8.868l0.243,0.24c-2.956,3.772-5.429,8.124-7.265,12.816 c-1.696,4.466-2.752,8.729-3.235,12.998c-4.13,34.25,11.52,65.55,53.994,108.028c58.711,58.707,106.027,54.273,108.067,54.055 c4.449-0.53,8.707-1.593,13.038-3.275c4.652-1.818,9.001-4.284,12.769-7.233l0.193,0.168l8.933-8.747 C204.079,176.661,204.265,166.343,198.048,160.105z M190.683,176.164l-3.937,3.93l-1.568,1.507 c-2.469,2.387-6.743,5.74-12.984,8.181c-3.543,1.364-7.036,2.24-10.59,2.663c-0.447,0.043-44.95,3.84-100.029-51.235 C14.743,94.38,7.238,67.395,10.384,41.259c0.394-3.464,1.263-6.95,2.652-10.593c2.462-6.277,5.812-10.547,8.181-13.02l5.443-5.497 c2.623-2.63,6.714-2.831,9.112-0.433l31.286,31.286c2.394,2.401,2.205,6.492-0.422,9.13L45.507,73.24l1.95,3.282 c1.084,1.829,2.23,3.879,3.454,6.106c5.812,10.482,13.764,24.83,29.121,40.173c15.317,15.325,29.644,23.27,40.094,29.067 c2.258,1.249,4.32,2.398,6.17,3.5l3.289,1.95l21.115-21.122c2.634-2.623,6.739-2.817,9.137-0.426l31.272,31.279 C193.5,169.446,193.31,173.537,190.683,176.164z"/>
        //     </g>
        //   </g>
        //   </svg>
        //   `,
        //   alt: "Tel",
        //   text: "",
        //   url: "tel:",
        // },
        {
          // icon: '/images/icons/linkedin.svg',
          /* prettier-ignore */
          icon: html`<svg version="1.1" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m29.675 177.28 92.784-1.157v303.83l-92.784 1.178v-303.85z" /><path d="m200.14 177.28 88.658-1.126v38.646l0.021 10.947c26.255-25.744 53.32-45.2 96.563-45.2 51.016 0 100.36 21.381 100.36 91.034v208.44l-90 1.341v-159.23c0-35.103-8.796-57.733-50.719-57.733-36.935 0-52.398 6.615-52.398 55.214v160.4l-92.478 1.116v-303.84z"/><path d="m127.84 81.449c0 28.051-22.74 50.79-50.79 50.79s-50.791-22.739-50.791-50.791c0-28.051 22.739-50.791 50.791-50.791 28.051 0 50.791 22.739 50.791 50.791z"/></svg>`,
          alt: 'LinkedIn',
          text: '/in/noelmdev',
          url: 'https://www.linkedin.com/in/noelmdev/',
        },
        {
          // icon: '/images/icons/github.svg',
          /* prettier-ignore */
          icon: html`<svg width="1024" height="1024" viewBox="0 0 1024 1024" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z" transform="scale(64)"/></svg>`,
          alt: 'GitHub',
          text: '@nlm-pro',
          url: 'https://github.com/nlm-pro',
        },
        // {
        //   // icon: '/images/icons/github.svg',
        //   /* prettier-ignore */
        //   icon: html`<svg width="1024" height="1024" viewBox="0 0 1024 1024" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z" transform="scale(64)"/></svg>`,
        //   alt: 'GitHub',
        //   text: '@xxx',
        //   url: 'https://github.com/xxx',
        // },
        {
          // icon: '/images/icons/webpage.svg',
          /* prettier-ignore */
          icon: html`<svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 100 100" x="0px" y="0px""><title>Artboard 67</title><path d="M97.36,74.47l-25.58-9.4a2.5,2.5,0,0,0-3.21,3.21L78,93.86a2.5,2.5,0,0,0,2.17,1.63h.18a2.5,2.5,0,0,0,2.2-1.32l4.07-7.56,7.21,7.21a2.5,2.5,0,0,0,3.54-3.54l-7.21-7.21L97.68,79a2.5,2.5,0,0,0-.32-4.55Zm-12.57,5.8a2.5,2.5,0,0,0-1,1l-3,5.63L75.13,71.63l15.29,5.62Z"/><path d="M65.64,84.39a2.5,2.5,0,0,0,0-5H7.36A1.36,1.36,0,0,1,6,78V28.43H83V61a2.5,2.5,0,0,0,5,0V10.86A6.37,6.37,0,0,0,81.64,4.5H7.36A6.37,6.37,0,0,0,1,10.86V78a6.37,6.37,0,0,0,6.36,6.36ZM7.36,9.5H81.64A1.36,1.36,0,0,1,83,10.86V23.43H6V10.86A1.36,1.36,0,0,1,7.36,9.5Z"/><path d="M14,66.78a2.5,2.5,0,0,0,5,0,10.16,10.16,0,1,1,20.33,0,2.5,2.5,0,0,0,5,0,15.18,15.18,0,0,0-7.91-13.31,10,10,0,1,0-14.51,0A15.18,15.18,0,0,0,14,66.78ZM24.23,46.64a5,5,0,1,1,5,5A5,5,0,0,1,24.23,46.64Z"/><path d="M72.45,39.39H52.52a2.5,2.5,0,0,0,0,5H72.45a2.5,2.5,0,0,0,0-5Z"/><path d="M75,52.83a2.5,2.5,0,0,0-2.5-2.5H52.52a2.5,2.5,0,0,0,0,5H72.45A2.5,2.5,0,0,0,75,52.83Z"/><path d="M52.52,61.27a2.5,2.5,0,0,0,0,5h7.31a2.5,2.5,0,1,0,0-5Z"/><path d="M23.89,19.19a2.5,2.5,0,1,0-2.49-2.5A2.52,2.52,0,0,0,23.89,19.19Z"/><path d="M33.24,19.19a2.5,2.5,0,1,0-2.49-2.5A2.52,2.52,0,0,0,33.24,19.19Z"/><path d="M14.53,19.19A2.5,2.5,0,1,0,12,16.69,2.52,2.52,0,0,0,14.53,19.19Z"/></svg>`,
          alt: 'website',
          text: 'noelmace.com',
          url: 'https://noelmace.com',
        },
      ],
    },
  },
  intro: {
    callToAction: {
      text: `Programmez un entretien sur`,
      url: 'calendly.com/noelmace',
      img: {
        src: '/images/icons/calendly.svg',
        alt: 'Calendly',
      },
    },
    items: [
      {
        title: 'Architecture & Développement Web',
        icon: {
          // src: '/images/icons/tools.svg',
          /* prettier-ignore */
          template: html`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 80 80" enable-background="new 0 0 68 68" xml:space="preserve"><g><path d="M 70.4 6.3 c -0.3 -0.3 -0.8 -0.4 -1.1 -0.2 l -4.8 2.3 c -0.2 0.1 -0.4 0.3 -0.5 0.5 L 62.5 12.8 L 43.4 31.9 l -0.6 -0.6 c -0.6 -0.6 -1.6 -0.6 -2.3 -0.1 l -9 -9 c -0.1 -0.1 -0.1 -0.2 -0.1 -0.3 c 1.3 -4.3 0.2 -8.9 -3 -12 c -3.4 -3.4 -8.2 -4.3 -12.4 -2.9 C 15.8 7.2 15.6 7.4 15.5 7.8 C 15.4 8.1 15.5 8.5 15.7 8.7 l 4.1 4.1 l -0.6 4.9 l -4.9 0.6 L 10.3 14.2 C 10.1 13.9 9.7 13.8 9.4 13.9 c -0.3 0.1 -0.6 0.3 -0.7 0.7 c -1.5 4.4 -0.4 9.1 2.9 12.4 c 3.1 3.1 7.6 4.3 12.1 3 c 0.1 0 0.1 0 0.2 0.1 l 6.5 6.5 L 8.9 57.8 c -1.2 1.2 -1.2 3.1 0 4.3 l 9 9 c 0.6 0.6 1.3 0.9 2.2 0.9 s 1.6 -0.3 2.2 -0.9 l 21.4 -21.4 l 6.5 6.5 c 0.1 0.1 0.1 0.2 0.1 0.3 c -1.3 4.3 -0.2 8.9 3 12 c 2.3 2.3 5.3 3.5 8.5 3.5 c 1.3 0 2.6 -0.2 3.9 -0.6 c 0.3 -0.1 0.6 -0.4 0.7 -0.7 c 0.1 -0.3 0 -0.7 -0.3 -0.9 l -4.1 -4.1 l 0.6 -4.9 l 4.9 -0.6 l 4.1 4.1 c 0.2 0.2 0.6 0.3 0.9 0.3 c 0.3 -0.1 0.6 -0.3 0.7 -0.6 c 1.5 -4.3 0.4 -9.2 -2.9 -12.4 c -3.1 -3.1 -7.6 -4.3 -12.1 -3 c -0.1 0 -0.1 0 -0.2 -0.1 l -9 -9 c 0.6 -0.7 0.5 -1.6 -0.1 -2.3 l -0.5 -0.5 l 19 -19.1 l 3.9 -1.5 c 0.2 -0.1 0.4 -0.3 0.5 -0.5 l 2.3 -4.8 c 0.2 -0.4 0.1 -0.8 -0.2 -1.1 L 70.4 6.3 z M 40 34.5 l 1.6 -1.6 c 0.4 0.4 5.5 5.5 5.4 5.4 l -1.7 1.7 l -5.4 -5.4 L 40 34.5 z M 25.2 28.5 c -0.4 -0.4 -1 -0.7 -1.6 -0.7 c -0.2 0 -0.4 0 -0.7 0.1 c -1 0.3 -1.9 0.4 -2.9 0.4 c -2.7 0 -5.2 -1 -7.1 -2.9 c -2.3 -2.3 -3.3 -5.5 -2.8 -8.7 l 3.2 3.2 c 0.2 0.2 0.5 0.3 0.8 0.3 l 6.1 -0.7 c 0.5 -0.1 0.8 -0.4 0.9 -0.9 l 0.7 -6.2 c 0 -0.3 -0.1 -0.6 -0.3 -0.8 L 18.4 8.5 c 3.1 -0.5 6.3 0.4 8.7 2.8 c 2.6 2.6 3.6 6.5 2.5 10 c -0.3 0.8 0 1.7 0.6 2.3 l 9 9 l -0.6 0.6 l -0.4 -0.4 c -0.6 -0.6 -1.4 -0.9 -2.2 -0.9 c -0.6 0 -1.2 0.2 -1.7 0.5 c -0.2 0.1 -0.3 0.2 -0.5 0.4 l -2.1 2.1 L 25.2 28.5 z M 42.8 47.6 c 0 0 0 0 0 0 L 20.8 69.7 c -0.4 0.4 -1.1 0.4 -1.5 0 l -9 -9 c -0.4 -0.4 -0.4 -1.1 0 -1.5 l 24.9 -24.9 c 0.4 -0.4 1.1 -0.4 1.5 0 l 0 0 l 9 9 c 0.4 0.4 0.4 1.1 0 1.5 L 42.8 47.6 z M 56.4 49.9 c 0.6 0.6 1.5 0.8 2.2 0.6 c 1 -0.3 1.9 -0.4 3 -0.4 c 2.7 0 5.2 1 7.1 2.9 c 2.3 2.3 3.3 5.5 2.8 8.7 l -3.2 -3.2 c -0.2 -0.2 -0.5 -0.3 -0.8 -0.3 l -6.1 0.7 c -0.5 0.1 -0.8 0.4 -0.9 0.9 l -0.7 6.1 c 0 0.3 0.1 0.6 0.3 0.8 l 3.2 3.2 c -0.5 0.1 -1.1 0.1 -1.6 0.1 c -2.7 0 -5.2 -1 -7.1 -2.9 c -2.6 -2.6 -3.6 -6.5 -2.5 -10 c 0.2 -0.8 0 -1.7 -0.6 -2.2 l -6.5 -6.5 l 2.1 -2.1 c 0.3 -0.3 0.5 -0.6 0.7 -1 c 0.3 -0.8 0.3 -1.7 -0.1 -2.5 c -0.1 -0.3 -0.3 -0.6 -0.6 -0.8 l -0.2 -0.2 l -0.2 -0.2 l 0.6 -0.6 L 56.4 49.9 z M 70 14.3 l -3.7 1.5 c -0.1 0 -0.2 0.1 -0.3 0.2 L 46.8 35.2 l -1.9 -1.9 L 64 14.1 c 0.1 -0.1 0.2 -0.2 0.2 -0.3 l 1.5 -3.7 l 3.8 -1.8 l 2.3 2.3 L 70 14.3 z"/><path d="M 40.6 42.5 L 18.5 64.6 c -0.4 0.4 -0.4 1 0 1.4 s 1 0.4 1.4 0 l 22.2 -22.2 c 0.4 -0.4 0.4 -1 0 -1.4 S 41 42.1 40.6 42.5 z"/><path d="M 37.5 37.9 c -0.4 -0.4 -1 -0.4 -1.4 0 L 13.9 60.1 c -0.4 0.4 -0.4 1 0 1.4 s 1 0.4 1.4 0 l 22.2 -22.2 C 37.9 39 37.9 38.3 37.5 37.9 z"/></g></svg>`,
          caption: 'expertise',
        },
        content: [
          html`Focus sur les
            <strong>standards et principes transverses</strong> (Web Components,
            Web APIs, PWAs, PRPL, a11y, performances, etc.)`,
          html`Maitrise de nombreux frameworks et bibliothèques (<strong
              >Lit, Open WC, Angular, React, Vue, Redux, Gatsby, 11ty,
              etc.</strong
            >)`,
          html`Maitrise avancée de
            <strong>Angular, Angular CLI & Nrwl/Nx</strong> (contributeur de
            2016 à 2018, puis suivi&nbsp;régulier)`,
          html`<strong>Livre</strong> complet sur les principes fondamentaux de
            <em
              ><a
                href="https://www.editions-eni.fr/livre/developpement-et-architecture-des-applications-web-modernes-retrouver-les-fondamentaux-9782409029523"
                target="_blank"
                rel="noreferrer noopener"
                >Développement & Architecture des Applications Web Modernes</a
              ></em
            >
            publié aux éditions ENI en 2021`,
          html`Aptitudes fullstack et DevOps (REST, ORM, CI/CD, SGBD, Docker,
          PaaS, Node.js, Python, Java, etc.)`,
        ],
      },
      {
        title: 'Pédagogie',
        icon: {
          // src: '/images/icons/rails.svg',
          /* prettier-ignore */
          template: html`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 80 80" style="enable-background: new 0 0 100 100" xml:space="preserve"><style type="text/css">.st0{display:none;}.st1{display:inline;}</style><g><path d="M 78.1 62.4 l -5.5 -14.5 c -0.1 -0.4 -0.5 -0.6 -0.9 -0.6 h -8.2 l -1.8 -6.5 H 68 c 0.3 0 0.6 -0.2 0.8 -0.4 c 0.2 -0.3 0.2 -0.6 0.1 -0.9 l -4.1 -10.9 c -0.1 -0.4 -0.5 -0.6 -0.9 -0.6 H 58 L 56.7 23 H 62 c 0.3 0 0.6 -0.2 0.8 -0.4 c 0.2 -0.3 0.2 -0.6 0.1 -0.9 l -3.2 -8.6 c -0.1 -0.4 -0.5 -0.6 -0.9 -0.6 h -5.1 l -1 -3.6 c -0.1 -0.4 -0.5 -0.7 -1 -0.7 H 47 c -0.3 0 -0.6 0.1 -0.8 0.4 C 46 8.8 46 9.1 46 9.4 l 0.7 3.1 H 33.2 l 0.8 -3 c 0.1 -0.3 0 -0.6 -0.2 -0.9 c -0.2 -0.2 -0.5 -0.4 -0.8 -0.4 h -4.8 c -0.4 0 -0.8 0.3 -1 0.7 l -1.2 3.6 h -5 c -0.4 0 -0.8 0.3 -0.9 0.6 l -3.2 8.6 c -0.1 0.3 -0.1 0.7 0.1 0.9 c 0.2 0.3 0.5 0.4 0.8 0.4 h 4.8 l -1.5 4.7 h -5.2 c -0.4 0 -0.8 0.3 -0.9 0.6 l -4.1 10.9 c -0.1 0.3 -0.1 0.7 0.1 0.9 c 0.2 0.3 0.5 0.4 0.8 0.4 h 5.1 L 15 47.3 h -6.7 c -0.4 0 -0.8 0.3 -0.9 0.6 l -5.5 14.5 c -0.1 0.3 -0.1 0.7 0.1 0.9 c 0.2 0.3 0.5 0.4 0.8 0.4 h 6.9 l -1.8 5.6 c -0.1 0.4 0 0.7 0.2 1 c 0.2 0.2 0.4 0.4 3 0.4 c 1.1 0 2.8 0 5.1 -0.2 c 0.4 0 0.8 -0.3 0.9 -0.7 l 1.7 -6.2 h 40.3 l 1.5 6.1 c 0.1 0.4 0.5 0.7 0.9 0.8 c 2.3 0.1 3.9 0.2 5.1 0.2 c 2.5 0 2.7 -0.2 3 -0.4 c 0.3 -0.3 0.4 -0.6 0.3 -1 l -1.6 -5.6 h 9 c 0.3 0 0.6 -0.2 0.8 -0.4 C 78.2 63 78.2 62.7 78.1 62.4 z M 63.2 29.8 l 3.4 8.9 h -5.5 l -2.5 -8.9 H 63.2 z M 58.1 14.5 l 2.5 6.6 h -4.4 l -1.8 -6.6 H 58.1 z M 47.2 14.5 l 1.6 6.6 h -18 l 1.8 -6.6 H 47.2 z M 25.3 40.7 h 28.3 l 1.6 6.5 H 23.4 L 25.3 40.7 z M 25.8 38.7 l 2.5 -8.9 h 22.6 l 2.1 8.9 H 25.8 z M 28.9 27.8 l 1.3 -4.7 h 19.1 l 1.1 4.7 H 28.9 z M 19.4 21 l 2.5 -6.6 h 3.7 L 23.5 21 H 19.4 z M 13.4 38.7 l 3.4 -8.9 h 3.8 l -2.9 8.9 H 13.4 z M 4.3 61.8 L 9 49.3 h 5.4 l -4 12.5 H 4.3 z M 15.3 68.7 c -1.9 0.1 -4 0.1 -5.2 0.1 l 18.9 -58.6 h 2.7 L 15.3 68.7 z M 19.3 61.8 l 3.5 -12.5 h 32.7 l 3 12.5 H 19.3 z M 62.3 68.7 l -14 -58.5 H 51 l 16.5 58.6 C 66.3 68.8 64.2 68.8 62.3 68.7 z M 67.6 61.8 l -3.5 -12.5 h 7 l 4.7 12.5 H 67.6 z"/></g></svg>`,
          caption: 'ligne directrice',
        },
        content: [
          html`<strong>Mentoring</strong> et
            <strong>transmission de compétences</strong> sont les piliers et
            fils conducteurs de l'ensemble de ma&nbsp;carrière`,
          html`Large expérience, en tant que formateur autonome et dans la
          direction et l'accompagnement d'importantes équipes pédagogique et R&D`,
        ],
      },
      {
        title: 'Partage & Découverte',
        icon: {
          // src: '/images/icons/motivation.svg',
          /* prettier-ignore */
          template: html`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 90 90" enable-background="new 0 0 90 90" xml:space="preserve"><g><path d="M 65.6 25.5 c -5.3 -7.2 -6.8 -7.2 -7.3 -7.2 c -0.8 0 -1.5 0.6 -1.6 1.4 c -0.7 6.1 -3.2 7.9 -6.7 10.3 c -0.3 0.2 -0.6 0.4 -0.9 0.6 c -1.6 -9.9 -14 -18.3 -14.6 -18.7 c -0.4 -0.3 -0.9 -0.3 -1.4 -0.1 c -0.5 0.2 -0.8 0.6 -0.9 1.1 c 0 0.1 -2.9 14.8 -12.9 23.4 C 11 43.5 6.5 51.4 6.1 59.7 c -0.7 11.7 6.8 20 7.3 20.6 c 0.2 0.3 7.1 8.3 20.3 9.6 c 0 -0.5 0.3 -4.8 0.3 -4.8 c -0.2 -2.2 -0.5 -6 -0.7 -7.8 c 0 -0.3 -0.4 -0.4 -0.6 -0.2 c -2 2.4 -4.1 4.6 -7.6 3.4 c -4.5 -1.5 -7.7 -6.8 -9.6 -10.8 c -0.8 -1.6 -1.9 -3.7 -1.7 -5.5 c 0.1 -2.1 1.7 -3.9 3.7 -4.3 c 4.7 -1 7.7 5.1 4 8.2 c 1.2 1.2 2.4 2.7 3.7 3.8 c 0.2 0.2 0.6 0.1 0.8 -0.1 c 2.2 -3.5 4.5 -7.6 7.6 -10.3 c 1.3 -1.1 2.9 -2.2 4.5 -2.7 c 0.3 -0.1 0.6 -0.1 0.9 -0.2 c -3.6 -1.6 -6 -5.2 -6 -9.4 c 0 -6.1 5.3 -10.9 11.5 -10.2 c 4.8 0.5 8.6 4.4 9 9.1 c 0.5 4.6 -2.1 8.7 -6 10.4 c 0.3 0.1 0.5 0.1 0.8 0.2 c 1.6 0.5 3.2 1.6 4.5 2.7 c 3.1 2.7 5.4 6.8 7.6 10.3 c 0.2 0.3 0.5 0.3 0.8 0.1 c 1.3 -1.1 2.6 -2.6 3.7 -3.8 c -3.7 -3.1 -0.7 -9.3 4 -8.2 c 2 0.4 3.6 2.2 3.7 4.3 c 0.1 1.8 -1 3.9 -1.7 5.5 c -1.9 4 -5.1 9.3 -9.6 10.8 c -3.4 1.1 -5.5 -1 -7.4 -3.2 c -0.2 -0.3 -0.7 -0.1 -0.7 0.2 c -0.1 2.1 -0.2 5.9 -0.4 7.5 c 0 0 0.1 0.8 0.2 1.8 c 0 0.5 0.2 2.5 0.2 3 c 13.1 -1.3 19.9 -9.1 20.3 -9.5 c 0 0 0 0 0.1 -0.1 c 10.4 -11.5 6.6 -27.2 1.6 -38.5 C 71.9 34.4 67.8 28.4 65.6 25.5 z"/><path d="M 13.6 37.5 C 13.6 37.5 13.6 37.5 13.6 37.5 L 13.6 37.5 c 0.5 0 0.8 -0.3 0.8 -0.7 c 0 -0.1 0 -0.2 0 -0.3 c -0.1 -0.6 -0.8 -4 -0.2 -8.5 c 0.4 -2.9 -0.2 -5.2 -1.6 -6.8 c -2.2 -2.5 -5.7 -2.7 -7.1 -2.7 c -0.4 0 -0.6 0 -0.6 0 c -0.3 0 -0.5 0.2 -0.6 0.5 c -0.1 0.3 0 0.6 0.2 0.8 c 1.2 1.3 0.9 3.1 0.5 5.4 c -0.2 1.5 -0.5 3.1 -0.4 4.8 C 4.9 35.3 10.6 37.2 13.6 37.5 z"/><path d="M 83.8 15 c -0.1 -0.3 -0.3 -0.5 -0.6 -0.5 c 0 0 -0.3 0 -0.8 0 c -1.4 0 -4 0.3 -5.9 2.3 c -1.5 1.6 -2.2 3.9 -2.1 6.9 c 0.2 4.7 -0.8 6.9 -0.8 6.9 c -0.1 0.2 -0.1 0.5 0 0.7 c 0.1 0.2 0.3 0.4 0.6 0.4 c 0 0 0.4 0 0.9 0 c 1.6 0 6.9 -0.4 7.7 -5.8 c 0.2 -1.6 0.1 -3.3 0 -4.7 c -0.2 -2.2 -0.3 -4.2 0.9 -5.4 C 83.9 15.6 83.9 15.3 83.8 15 z"/><path d="M 21.8 22.4 c 0 0.3 0.2 0.5 0.4 0.6 c 0.1 0.1 0.2 0.1 0.3 0.1 c 0.1 0 0.3 0 0.4 -0.1 c 2.4 -1.6 6.3 -5.9 3.6 -10.6 c -0.8 -1.4 -1.9 -2.6 -2.9 -3.7 C 22.1 7.1 20.8 5.6 21 4 c 0 -0.3 -0.1 -0.5 -0.3 -0.7 c -0.2 -0.1 -0.5 -0.2 -0.8 0 c -0.1 0.1 -3.2 2 -3.8 5.5 c -0.4 2.3 0.5 4.7 2.5 7.1 C 21.6 19.4 21.8 22.4 21.8 22.4 z"/><path d="M 52.7 20.8 c 0.1 0 0.1 0 0.2 0 l 0 0 c 0.4 0 0.8 -0.3 0.8 -0.7 c 0 -0.1 0 -0.1 0 -0.2 c 0 -0.4 0.1 -2.8 1.3 -6.5 c 0.9 -2.7 0.8 -5.1 -0.4 -7 c -1.7 -2.9 -4.9 -4.4 -5.1 -4.4 c -0.2 0 -0.4 0 -0.6 0.1 c -0.2 0.1 -0.3 0.3 -0.3 0.5 c -0.2 2.5 -0.9 4.3 -1.6 5.5 c -0.6 1 -1.1 2.1 -1.4 3.9 C 44.8 18.3 52.4 20.7 52.7 20.8 z"/></g></svg>`,
          caption: 'motivations',
        },
        content: [
          html`Forte appétence pour l'<strong>Open Source</strong> et les
            oeuvres&nbsp;libres`,
          html`Nombreux <strong>workshops et conférences</strong> créés
            et&nbsp;présentés`,
          html`Maitrise de nombreux outils et stratégies de
            <strong>documentation, typage et testing</strong>`,
        ],
      },
    ],
  },
  experience: {
    title: 'Expérience',
    dateIntervals: {
      noEnd: 'Depuis',
      start: 'De',
      end: 'à',
    },
    items: [
      [
        {
          company: {name: 'Freelance'},
          startDate: 'janv. 2020',
          jobTitle: 'Consultant, Formateur',
          icon: '/images/companies-logos/fwd.svg',
          details: 'Développement & architecture Web',
        },
        {
          company: {name: 'blindnet', details: 'start-up'},
          startDate: 'févr. 2022',
          endDate: 'oct. 2022',
          jobTitle: 'VP, Technology & Pedagogy',
          details: [
            'Encadrement du développement Web, Java et Scala',
            'Accompagnement client et maintenance des documentations techniques',
            'Promotion de la privacy',
          ],
          icon: '/images/companies-logos/blindnet.svg',
        },
        {
          company: {
            name: 'Editions ENI',
            details: "maison d'édition",
          },
          jobTitle: 'Auteur',
          startDate: 'mars 2020',
          endDate: 'mars 2021',
          icon: '/images/companies-logos/eni.svg',
          details: [
            html`Rédaction du livre
              <a href=${urlLivreENI} target="_blank" rel="noferrer noopener"
                ><strong
                  >Développement et architecture des applications Web
                  Modernes</strong
                ></a
              >
              (608 pages)`,
            "16500 lignes de code d'exemple, testées et exécutables",
            'Développement de bibliothèques, outils, scripts et projets permettant de valider et appuyer la rédaction',
          ],
        },
        {
          company: {
            name: 'Bonitasoft',
            details: 'éditeur logiciel Open Source (BPM)',
          },
          jobTitle: 'Developer Advocate Web',
          startDate: 'avr. 2019',
          endDate: 'oct. 2019',
          icon: '/images/companies-logos/bonitasoft.png',
          webp: '/images/companies-logos/bonitasoft.webp',
          details: [
            html`<strong>Modernisation, DevX et performance</strong> :
              contribution et accompagnement à une transition de
              <em>AngularJS</em> aux <em>Web Components</em>`,
            "Mise en place d'une stratégie et d'outils facilitant la production de contenus, ainsi que la gestion de 213 évènements (via Gatsby, Netlify CMS, GitHub)",
          ],
        },
        {
          company: {name: 'SFEIR', details: 'ESN, 500 employés'},
          jobTitle: 'Developer Advocate / Architecte Web',
          startDate: 'juin 2018',
          endDate: 'avr. 2019',
          icon: '/images/companies-logos/sfeir.jpg',
          webp: '/images/companies-logos/sfeir.webp',
          details: [
            html`<strong>Double mission</strong> : expertise technique (3j/5) et
              advocacy`,
            html`Stabilisation et amélioration de la maintenabilité d'une
              application <strong>Angular, NgRx et Preact</strong> en tant que
              tech lead pour la Société Générale`,
            html`Encadrement et montée en compétence d'une équipe de
              <strong>30 développeurs Angular</strong> (Paris & Hong Kong) pour
              BNP Paribas`,
            "Audit et amélioration des performances de Progressive Web Apps (Vanilla, React, Vue, Angular), migrations AngularJS-Angular, réponses à appels d'offre, etc.",
          ],
        },
      ],
      [
        {
          company: {name: 'Sedona', details: 'ESN, 100 employés'},
          jobTitle: 'Directeur Technique JS / Architecte Web',
          startDate: 'déc. 2015',
          endDate: 'mai 2018',
          icon: '/images/companies-logos/sedona.png',
          webp: '/images/companies-logos/sedona.webp',
          details: [
            html`<strong>Direction technique de 8 projets</strong> front-end
              JavaScript (AngularJS, JQuery, PHP et Node.js) menés par 3 équipe
              de 12 développeurs`,
            html`Définition de l'architecture front-end web de référence pour
              Sedona ainsi que le groupe <em>Harmonie Mutuelle</em>`,
            html`<strong>Réponse à appels d'offre</strong> et
              <strong>modernisation</strong> de l'usage des technologies Web sur
              l'ensemble du groupe (marques Sedona, West, RedShift et Inadeo)`,
            html`<em>(À partir de déc. 2016)</em> suivi, développement et mise
              en place des codes et outils transverses sur 3 projets, menés par
              6 équipes (30 développeurs), en tant qu'<strong
                >architecte référant Angular</strong
              >
              pour le compte de <em>Saint Gobain</em>`,
          ],
        },
        {
          company: {name: 'Française des Jeux'},
          jobTitle: 'Lead Developer AngularJS',
          startDate: 'juin 2015',
          endDate: 'nov. 2015',
          icon: '/images/companies-logos/fdj.png',
          webp: '/images/companies-logos/fdj.webp',
          details: html`Développement des "widgets" de gestion de compte et de
            l'Euromillions en <strong>AngularJS 1.4 et ES2015</strong> pour le
            portail fdj.fr, au sein d'une équipe de 8 développeurs.`,
          shortLine: true,
        },
        {
          company: {name: 'Freelance'},
          jobTitle: 'Formateur, Consultant',
          startDate: 'mai 2011',
          endDate: 'nov. 2015',
          icon: '/images/companies-logos/nmc.png',
          webp: '/images/companies-logos/nmc.webp',
          details: [
            html`<strong>38 formations</strong> délivrées en ligne et présentiel`,
            html`<strong>3 applications</strong> Java (Spring, Struts,
              Hibernate) & Android développées`,
          ],
          shortLine: true,
        },
        {
          company: {name: 'Supinfo', details: 'International University'},
          jobTitle: "Directeur de l'enseignement Unix",
          startDate: 'juin 2010',
          endDate: 'avr. 2011',
          icon: '/images/companies-logos/supinfo.jpg',
          webp: '/images/companies-logos/supinfo.webp',
          details: [
            html`<strong>70 formateurs recrutés</strong> et formés pour
              l'enseignement de
              <strong>3 matières (Linux, Apple & Sécurité)</strong> sur les 30
              sites du groupe à l'international`,
            html`<strong>7 unités pédagogiques</strong> définies, rédigées et
              encadrées`,
          ],
          shortLine: true,
        },
        {
          company: {name: 'Supinfo'},
          jobTitle: 'Enseignant formateur',
          startDate: 'oct. 2009',
          endDate: 'juin 2010',
          icon: '/images/companies-logos/supinfo.jpg',
          webp: '/images/companies-logos/supinfo.webp',
          details: html`12 unités pégagogiques enseignées sur 18 sites dans<br />3
            pays (+ DOM)`,
          shortLine: true,
        },
      ],
    ],
  },
  education: {
    title: 'Formation',
    items: [
      {
        school: 'Supinfo International University',
        diploma: 'Master of IT Engineering',
        year: '2010',
      },
      {
        school: 'Université Toulouse Jean Jaurès',
        diploma: 'DEUG Mathématiques Appliquées aux Sciences Sociales',
        year: '2007',
      },
    ],
  },
  accomplishments: {
    title: 'Réalisations',
    groups: [
      {
        title: '28 Conférences & Workshops',
        items: [
          {
            headline: "Architecture d'applications Web",
          },
          {
            headline: 'Web Performance',
          },
          {
            headline: 'Soft Skills',
          },
          {
            headline: "Stratégies d'entreprise",
          },
          {
            headline: 'Frameworks et bibliothèques de développement Web',
          },
          {
            headline: 'Histoire des technologies',
          },
        ],
      },
      {
        title: '13 Podcasts',
        items: [
          {
            headline: 'Soft Skills',
          },
          {
            headline: 'Lead Development',
          },
          {
            headline: 'Bien-être au travail',
          },
        ],
      },
      {
        title: '20+ Publications',
        items: [
          {
            headline: 'Livre de référence',
          },
          {
            headline: 'Blogs',
          },
          {
            headline: `Livres blancs`,
          },
          {
            headline: `Manuels de formation`,
          },
          {
            headline: `Documentations techniques`,
          },
          {
            headline: `Copywriting`,
          },
        ],
      },
      {
        title: html`<span style="font-size: 32px; position: relative; top: +6px"
            >∞</span
          >
          projets Open Source`,
        items: [
          {
            headline: 'CLIs',
          },
          {
            headline: 'Static Site Generators',
          },
          {
            headline: 'Framework et bibliothèques de développment web',
          },
          {
            headline:
              'Expérimentations, Démonstrations techniques, Proofs of Concepts ...',
          },
        ],
      },
    ],
  },
  misc: {
    title: "Centres d'intérêt",
    content: [
      'Logiciel Libre, Open Source & Ethical Source',
      'Pédagogie et vulgarisation scientifique',
      'Jeux de rôle et de société',
      'Mathématiques et Physique théorique',
      html`Sciences naturelles, sociales et&nbsp;cognitives`,
      'Legos, maquettes, puzzles',
    ],
  },
} satisfies ResumeWordings;
