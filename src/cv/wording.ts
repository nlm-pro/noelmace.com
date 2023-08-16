export interface ExperienceItemWording {
  jobTitle?: string;
  duration?: string;
  company?: {
    name?: string;
    details?: string;
  };
  startDate?: string;
  endDate?: string;
  details?: string[] | string;
  shortLine?: boolean;
  icon: string;
  webp?: string;
}

export interface ExperienceWording {
  title: string;
  items: ExperienceItemWording[][];
  dateIntervals: {
    noEnd: string;
    start: string;
    end: string;
  };
}

export interface ListSectionWording {
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

export const wording: CVWording = {
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
          webp: '/images/companies-logos/bonitasoft.webp',
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
          webp: '/images/companies-logos/sfeir.webp',
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
          webp: '/images/companies-logos/sedona.webp',
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
          webp: '/images/companies-logos/fdj.webp',
          details: `Développement des "widgets" de gestion de compte et de l'Euromillions en <strong>AngularJS 1.4 et ES2015</strong> pour le portail fdj.fr, au sein d'une équipe de 8 développeurs.`,
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
          webp: '/images/companies-logos/supinfo.webp',
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
          webp: '/images/companies-logos/supinfo.webp',
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
