import {LitElement, html, css} from 'lit';
import {unsafeHTML} from 'lit/directives/unsafe-html.js';

import type {ExperienceWording} from './cv-experience';
import './cv-experience';

const timelineStyle = css`
  * {
    box-sizing: border-box;
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
    z-index: -1;
    transform: translateX(-50%);
  }
  .mirror .timeline__event .timeline__event__icon:after {
    content: '';
    width: 100%;
    height: 2px;
    background: var(--primary-color);
    position: absolute;
    right: 100%;
    z-index: -1;
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
    width: 60px;
    height: 60px;
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
    z-index: -1;
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
    z-index: -1;
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
`;

interface ListSectionWording {
  title: string;
  content: string[];
}

export interface CVWording {
  title: string;
  subtitle: string;
  note: string;
  presentation: {
    title: string;
    abstract: string[];
    langs: ListSectionWording;
    networks?: {
      title: string;
      content: {
        icon: string;
        alt: string;
        text: string;
        url?: string;
      }[];
    };
  };
  intro: {
    callToAction?: {
      text: string;
      url: string;
      img: {
        src: string;
        alt: string;
      };
    };
    items: {
      title: string;
      content: string[];
      icon: {
        src: string;
        caption: string;
      };
    }[];
  };
  experience: ExperienceWording;
  education: {
    title: string;
    items: {
      school?: string;
      diploma: string;
      year?: string;
      title?: string;
    }[];
  };
  accomplishments: {
    title: string;
    groups: {
      title: string;
      items: {
        headline: string;
        date?: string;
        links?: {
          text: string;
          href?: string;
        }[];
        context?: string;
        href?: string;
      }[];
    }[];
  };
  misc: {
    title: string;
    content: string[];
  };
}

const urlLivreENI =
  'https://www.editions-eni.fr/livre/developpement-et-architecture-des-applications-web-modernes-retrouver-les-fondamentaux-9782409029523';

const wording: CVWording = {
  title: 'Noël Macé',
  subtitle: 'Développeur/Architecte Web',
  note: "14 ans d'expérience",
  presentation: {
    title: 'Présentation',
    abstract: [
      `D'un naturel passionné et investi, je recherche perpétuellement de nouveaux défis techniques, intellectuels et humains.`,
      `Grâce à cela, j'ai au cours des années accumulé une expérience complète et variée dans de nombreux domaines, notamment: le développement et l'architecture applicative, l'administration système et réseaux, la pédagogie, le management et la communication.`,
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
      content: [
        // {
        //   icon: "/images/icons/mail.svg",
        //   alt: "Email",
        //   text: "",
        //   url: "mailto:",
        // },
        // {
        //   icon: "/images/icons/phone.svg",
        //   alt: "Tel",
        //   text: "",

        //   url: "tel:",
        // },
        {
          icon: '/images/icons/linkedin.svg',
          alt: 'LinkedIn',
          text: '/in/noelmdev',
          url: 'https://www.linkedin.com/in/noelmdev/',
        },
        // {
        //   icon: '/images/icons/github.svg',
        //   alt: 'GitHub',
        //   text: 'nlm-pro',
        //   url: 'https://github.com/nlm-pro',
        // },
        // {
        //   icon: '/images/icons/github.svg',
        //   alt: 'GitHub',
        //   text: 'xxx',
        //   url: 'https://github.com/xxx',
        // },
        {
          icon: '/images/icons/webpage.svg',
          alt: 'page web personnelle',
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
          src: '/images/icons/tools.svg',
          caption: 'expertise',
        },
        content: [
          /* HTML */ `Focus sur les
            <strong>standards et principes transverses</strong> (Web Components,
            Web APIs, PWAs, PRPL, a11y, performances, etc.)`,
          /* HTML */ `Maitrise de nombreux frameworks et bibliothèques (<strong
              >Lit, Open WC, Angular, React, Vue, Redux, Gatsby, 11ty,
              etc.</strong
            >)`,
          /* HTML */ `Maitrise avancée de
            <strong>Angular, Angular CLI & Nrwl/Nx</strong> (contributeur de
            2016 à 2018, puis suivi&nbsp;régulier)`,
          /* HTML */ `<strong>Livre</strong> complet sur les principes
            fondamentaux de
            <em
              ><a
                href="https://www.editions-eni.fr/livre/developpement-et-architecture-des-applications-web-modernes-retrouver-les-fondamentaux-9782409029523"
                target="_blank"
                rel="noreferrer noopener"
                >Développement & Architecture des Applications Web Modernes</a
              ></em
            >
            publié aux éditions ENI en 2021`,
          /* HTML */ `Aptitudes fullstack et DevOps (REST, ORM, CI/CD, SGBD,
          Docker, PaaS, Node.js, Python, Java, etc.)`,
        ],
      },
      {
        title: 'Pédagogie',
        icon: {
          src: '/images/icons/rails.svg',
          caption: 'ligne directrice',
        },
        content: [
          /* HTML */ `<strong>Mentoring</strong> et
            <strong>transmission de compétences</strong> sont les piliers et
            fils conducteurs de l'ensemble de ma&nbsp;carrière`,
          /* HTML */ `Large expérience, en tant que formateur autonome et dans
          la direction et l'accompagnement d'importantes équipes pédagogique ou
          de R&D`,
        ],
      },
      {
        title: 'Partage & Découverte',
        icon: {
          src: '/images/icons/motivation.svg',
          caption: 'motivations',
        },
        content: [
          /* HTML */ `Forte appétence pour l'<strong>Open Source</strong> et les
            oeuvres&nbsp;libres`,
          /* HTML */ `Nombreux <strong>workshops et conférences</strong> créés
            et&nbsp;présentés`,
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
            'Accompagnement client et rédaction de documentations',
            'Promotion de la privacy',
          ],
          icon: '/images/companies-logos/blindnet.svg',
        },
        {
          company: {
            name: 'Editions ENI',
            details: "maison d'édition de livres d'informatique",
          },
          jobTitle: 'Auteur',
          startDate: 'mars 2020',
          endDate: 'mars 2021',
          icon: '/images/companies-logos/eni.svg',
          details: [
            /* HTML */ `Rédaction du livre
              <a href=${urlLivreENI} target="_blank" rel="noferrer noopener"
                ><strong
                  >Développement et architecture des applications Web
                  Modernes</strong
                ></a
              >
              (608 pages)`,
            "16500 lignes de code d'exemple, testées et executables",
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
          details: [
            "Mission : améliorer la satisfaction utilisateur et l'image de marque des produits Bonitasoft impliquant des technologies Web",
            '<strong>Modernisation et performance</strong> : contribution et accompagnement à une transition de <em>AngularJS</em> aux <em>Web Components</em>',
            "Mise en place d'une stratégie et d'outils facilitant la production de contenus, ainsi que la gestion de 213 évènements (via Gatsby, Netlify CMS, GitHub)",
          ],
        },
        {
          company: {name: 'SFEIR', details: 'ESN, 500 employés'},
          jobTitle: 'Developer Advocate / Architecte Web',
          startDate: 'juin 2018',
          endDate: 'avr. 2019',
          icon: '/images/companies-logos/sfeir.jpg',
          details: [
            '<strong>Double mission</strong> : expertise technique (3j/5) et advocacy',
            "Stabilisation et amélioration de la maintenabilité d'une application <strong>Angular, NgRx et Preact</strong> en tant que tech lead pour la Société Générale",
            "Encadrement et montée en compétence d'une équipe de <strong>30 développeurs Angular</strong> (Paris & Hong Kong) pour BNP Paribas",
            "Audit et amélioration des performances de Progressive Web Apps (Vanilla, React, Vue, Angular), migrations AngularJS-Angular, réponses à appels d'offre, etc.",
            '8 conférences et 5 formations délivrées (cf. réalisations)',
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
          details: [
            '<strong>Direction technique de 8 projets</strong> front-end JavaScript (AngularJS, JQuery, PHP et Node.js) menés par 3 équipe de 12 développeurs',
            "Définition de l'architecture front-end web de référence pour Sedona ainsi que le groupe <em>Harmonie Mutuelle</em>",
            "<strong>Réponse à appels d'offre</strong> et <strong>modernisation</strong> de l'usage des technologies Web sur l'ensemble du groupe (marques Sedona, West, RedShift et Inadeo)",
            "<em>(À partir de déc. 2016)</em> suivi, développement et mise en place des codes et outils transverses sur 3 projets, menés par 6 équipes (30 développeurs), en tant qu'<strong>architecte référant Angular</strong> pour le compte de <em>Saint Gobain</em>",
          ],
        },
        {
          company: {name: 'Française des Jeux'},
          jobTitle: 'Lead Developer AngularJS',
          startDate: 'juin 2015',
          endDate: 'nov. 2015',
          icon: '/images/companies-logos/fdj.png',
          details: `Développement des "widgets" de gestion de compte et de l'Euromillions en <strong>AngularJS 1.4 et ES2015</strong> pour le portail fdj.fr, au sein d'une équipe de 8 développeurs.`,
          shortLine: true,
        },
        {
          company: {name: 'Freelance'},
          jobTitle: 'Formateur, Consultant',
          startDate: 'mai 2011',
          endDate: 'nov. 2015',
          icon: '/images/companies-logos/nmc.png',
          details: [
            '<strong>38 formations</strong> délivrées en ligne et présentiel',
            '<strong>3 applications</strong> Java (Spring, Struts, Hibernate) & Android développées',
          ],
          shortLine: true,
        },
        {
          company: {name: 'Supinfo', details: 'International University'},
          jobTitle: "Directeur de l'enseignement Unix",
          startDate: 'juin 2010',
          endDate: 'avr. 2011',
          icon: '/images/companies-logos/supinfo.jpg',
          details: [
            "<strong>70 formateurs recrutés</strong> et formés pour l'enseignement de <strong>3 matières (Linux, Apple & Sécurité)</strong> sur les 30 sites du groupe à l'international",
            '<strong>7 unités pédagogiques</strong> définies, rédigées et encadrées',
          ],
          shortLine: true,
        },
        {
          company: {name: 'Supinfo'},
          jobTitle: 'Enseignant formateur',
          startDate: 'oct. 2009',
          endDate: 'juin 2010',
          icon: '/images/companies-logos/supinfo.jpg',
          details:
            '12 unités pégagogiques enseignées sur 18 sites dans<br />3 pays (+ DOM)',
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
        diploma: 'DEUG Mathématiques Appliqués aux Sciences Sociales',
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
        title: '15+ projets Open Source',
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
            headline: 'Démonstrations techniques et Proofs of Concepts',
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
      'Sciences naturelles, sociales, politiques et&nbsp;cognitives',
      'Legos, maquettes, puzzles',
    ],
  },
};

export default class CVElement extends LitElement {
  static override get properties() {
    return {
      quiet: {type: Boolean},
      align: {type: Boolean},
      anonymous: {type: Boolean},
    };
  }

  static override get styles() {
    return [
      timelineStyle,
      css`
        :host {
          display: block;
          margin: 0 auto;
          max-width: 936px;
        }
        :host > section {
          padding: 1rem;
        }

        h1 {
          font-size: 2rem;
          margin-top: 0;
        }

        .first-page {
          display: grid;
          grid-template-columns: 310px 1fr;
          margin-left: auto;
          margin-right: auto;
        }
        #cv__presentation {
          background-color: var(--primary-color);
          color: var(--neutral-color-0);
          padding: 1.7rem;
        }

        #cv__presentation .note {
          margin-top: 0;
          font-style: italic;
        }

        #cv__presentation .subtitle {
          margin-bottom: 0;
          padding-bottom: 1rem;
          font-size: 1.1rem;
          font-weight: bold;
        }

        #cv__presentation h2 {
          display: none;
        }

        .presentation-contents {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          margin-top: 1rem;
        }

        .presentation-contents > * {
          flex-grow: 1;
        }

        .presentation-contents h3 {
          margin: 4rem 0 0.5rem 1rem;
        }

        .networks ul,
        .langs ul {
          list-style: none;
          padding-left: 0;
          padding: 0;
        }

        .langs li {
          padding-bottom: 0.5rem;
        }

        .networks__item, .networks__item > a {
          display: flex;
          align-items: center;
        }

        li > a {
          width: 100%;
        }

        li > a:hover {
          background-color: rgba(255,255,255,.1);
        }

        .networks__item img {
          width: 25px;
          height: 25px;
          margin: 0.3rem;
        }

        .networks__item__content {
          margin-left: 2rem;
        }

        #cv__intro {
          display: flex;
          flex-direction: column;
          padding-top: 1rem;
          padding-bottom: 1rem;
        }

        #cv__intro > * {
          margin-top: auto;
        }

        .cv__intro__item {
          display: flex;
          flex-direction: column;
        }

        #cv__intro .icon-container {
          text-align: center;
          font-weight: bold;
          display: flex;
          flex-direction: column;
          align-items: center;
          line-height: 1.2rem;
          margin: 1rem 1rem 0;
        }

        #cv__intro .icon {
          width: 50px;
          margin-bottom: 0.5rem;
        }

        #cv__xp .details {
          margin: 0.5rem 0;
        }

        #cv__xp ul.details {
          padding-left: 1.5rem;
        }

        .jobtitle {
          font-weight: bold;
        }

        .dates {
          font-weight: initial;
        }

        .cv__intro__item__header {
          display: flex;
          margin-left: 1rem;
        }

        .cv__intro__item h3 {
          margin: 0;
        }

        .cv__intro__item .title-container {
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .cv__intro__item__content {
          margin-left: 2rem;
        }

        .cv__intro__cta {
          text-align: center;
          font-weight: bold;
          align-self: center;
          padding: 1rem;
        }

        .cv__intro__cta > * {
          margin: 0;
        }

        .print-link {
          font-weight: initial;
          font-style: italic;
          text-decoration: underline;
        }

        .last-page > section {
          padding: 0 2rem;
        }

        .cv__accomplishments__content,
        #cv__misc > ul,
        #cv__education ul {
          columns: 2;
          column-gap: 2rem;
        }

        .accomplishment:first-child h3 {
          margin-top: 0;
        }

        .accomplishment h3 {
          margin-bottom: 0.5rem;
        }

        .accomplishment > ul {
          margin-top: 0.5rem;
        }

        .accomplishment {
          break-inside: avoid;
        }

        #cv__misc {
          margin-top: 0;
        }

        .last-page h2 {
          margin-bottom: 1rem;
        }

        .last-page li {
          margin: 0.2em 0;
        }

        @media print {
          @page {
            margin: 100cm !important;
          }
          .first-page,
          #cv__xp {
            break-after: page;
            width: 100vw;
          }

          .first-page {
            height: 100vh;
            padding-right: 2rem;
          }

          #cv__xp {
            height: 200vh;
            margin-top: 0;
          }

          #cv__xp > h2 {
            display: none;
          }

          #cv__education {
            margin-top: 0;
          }

          .timeline {
            break-inside: avoid;
            page-break-inside: avoid;
          }

          a {
            text-decoration: none;
            color: inherit;
          }

          .page-break {
            break-after: page;
          }

          .cv__intro__cta {
            border: 1px solid var(--primary-color);
            border-radius: 6px;
          }

          .cv__intro__cta img {
            margin: 1rem;
            height: 32px;
          }
        }
        @media screen {
          .print-only {
            display: none;
          }

          .invisible-link {
            text-decoration: none;
            color: inherit;
          }

          #cv__xp,
          .last-page {
            border-top: 1px dashed var(--primary-color-softer);
          }

          /* FIXME: duplication */
          .call-to-action {
            padding: 0.8rem 34px;
            font-weight: 600;
            font-size: 18px;
            line-height: 1.2rem;
            border-radius: 48px;
            box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26);
            box-sizing: border-box;
            cursor: pointer;
            text-decoration: none;
            display: inline-block;
            margin: 0.5rem;
            background-color: var(--soft-bg-color);
            color: var(--primary-text-color-stronger);
            border: none;
          }

          .call-to-action.primary {
            background-color: var(--primary-color-softer);
            color: white;
          }

          .call-to-action:hover {
            background-color: var(--stronger-bg-color);
          }

          .call-to-action.primary:hover {
            background-color: var(--primary-color);
          }
        }
        @media screen and (max-width: 786px) {
          .first-page {
            display: block;
          }
          :host > section {
            padding: 0;
          }
          .last-page > section {
            padding: 0 1rem;
          }
          .cv__accomplishments__content,
          #cv__misc > ul,
          #cv__education ul {
            columns: initial;
          }
          section > h2 {
            text-align: center;
          }
        }
      `,
    ];
  }

  public quiet = false;
  public align = false;
  public anonymous = false;
  private wording = wording;

  override render() {
    return html`
      <div class="first-page">
        <section id="cv__presentation">
          <div class="presentation-header">
            <h1>${this.anonymous ? 'NMA' : this.wording.title}</h1>
            <p class="subtitle">${this.wording.subtitle}</p>
            <p class="note">${this.wording.note}</p>
          </div>
          <div class="presentation-contents">
            <h2>${this.wording.presentation.title}</h2>
            <div class="abstract">
              ${this.wording.presentation.abstract.map(
                (content) => html`<p>${content}</p>`
              )}
            </div>
          </div>
          ${!this.wording.presentation.networks
            ? ''
            : html`<div class="networks">
                <h3>${this.wording.presentation.networks.title}</h3>
                <ul>
                  ${this.wording.presentation.networks.content.map((item) =>
                    item.url
                      ? html`<li class="networks__item">
                          <a
                            href=${item.url}
                            target="_blank"
                            rel="noreferrer noopener"
                            class="invisible-link"
                          >
                            <img
                              src=${item.icon}
                              alt=${item.alt}
                              class="light-icon"
                            />
                            <span class="networks__item__content">
                              ${item.text}
                            </span>
                          </a>
                        </li>`
                      : html`<li class="networks__item">
                          <img src=${item.icon} alt=${item.alt} />
                          <span class="networks__item__content">
                            ${item.text}
                          </span>
                        </li>`
                  )}
                </ul>
              </div>`}
          <div class="langs">
            <h3>${this.wording.presentation.langs.title}</h3>
            <ul>
              ${this.wording.presentation.langs.content.map(
                (lang) => html`<li>${lang}</li>`
              )}
            </ul>
          </div>
        </section>
        <section id="cv__intro">
          ${this.wording.intro.items.map(
            ({title, content, icon}) =>
              html` <div class="cv__intro__item">
                <div class="cv__intro__item__header">
                  <div class="icon-container">
                    <img class="icon light-icon" src=${icon.src} alt="" />
                  </div>
                  <div class="title-container">
                    <div class="category">${icon.caption}</div>
                    <h3>${title}</h3>
                  </div>
                </div>
                <ul class="cv__intro__item__content">
                  ${content.map((w) => html`<li>${unsafeHTML(w)}</li>`)}
                </ul>
              </div>`
          )}
          ${!this.wording.intro.callToAction
            ? html`<div></div>`
            : html`<div class="cv__intro__cta">
                <p>${this.wording.intro.callToAction.text}</p>
                <a
                  href="https://${this.wording.intro.callToAction.url}"
                  rel="noreferrer noopener"
                  target="_blank"
                  class="call-to-action"
                >
                  <img
                    src=${this.wording.intro.callToAction.img.src}
                    alt=${this.wording.intro.callToAction.img.alt}
                    height="24px"
                  />
                  <div class="print-only print-link">
                    ${this.wording.intro.callToAction.url}
                  </div>
                </a>
              </div>`}
        </section>
      </div>
      <section id="cv__xp">
        <h2>${this.wording.experience.title}</h2>
        <nmc-cv-experience
          .wording=${this.wording.experience}
          ?align=${this.align}
        ></nmc-cv-experience>
      </section>
      <div class="last-page">
        <section id="cv__accomplishments">
          <h2>${this.wording.accomplishments.title}</h2>
          <div class="cv__accomplishments__content">
            ${this.wording.accomplishments.groups.map(
              (group) => html`
                <article class="accomplishment">
                  <h3>${group.title}</h3>
                  <ul>
                    ${group.items.map(
                      (item) => html`
                        <li>
                          <em>
                            ${item.href
                              ? html`<a
                                  href=${item.href}
                                  target="_blank"
                                  rel="noreferrer noopener"
                                  >${item.headline}</a
                                >`
                              : item.headline}
                          </em>
                          ${item.links
                            ? html` -
                              ${item.links.map(
                                ({text, href}, i) =>
                                  html`${href
                                    ? html`<a
                                        href=${href}
                                        target="_blank"
                                        rel="noreferrer noopener"
                                        >${text}</a
                                      >`
                                    : text}${item.links &&
                                  i < item.links.length - 1
                                    ? ', '
                                    : ''}`
                              )}`
                            : ''}
                          ${item.context ? html` - ${item.context}` : ''}
                          ${item.date ? html` - ${item.date}` : ''}
                        </li>
                      `
                    )}
                  </ul>
                </article>
              `
            )}
          </div>
        </section>
        <section id="cv__misc">
          <h2>${this.wording.misc.title}</h2>
          <ul>
            ${this.wording.misc.content.map(
              (txt) => html`<li>${unsafeHTML(txt)}</li>`
            )}
          </ul>
        </section>
        <section id="cv__education">
          <h2>${this.wording.education.title}</h2>
          <ul>
            ${this.wording.education.items.map(
              (item) =>
                html`<li>
                  <span class="cv__education__year">${item.year}</span> :
                  <span class="cv__education__diploma">${item.diploma}</span>,
                  <span class="cv__education__school">${item.school}</span>
                </li>`
            )}
          </ul>
        </section>
      </div>
    `;
  }
}

customElements.define('nmc-cv', CVElement);
