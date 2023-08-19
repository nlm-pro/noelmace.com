import {html} from 'lit';
import type {ResumeWordings} from '.';
import frWordings, {xpYears} from './webdev.fr';

const urlLivreENI =
  'https://www.editions-eni.fr/livre/developpement-et-architecture-des-applications-web-modernes-retrouver-les-fondamentaux-9782409029523';

export default {
  ...frWordings,
  presentation: {
    ...frWordings.presentation,
    jobTitle: `Senior Web Developer`,
    note: `Experience: ${xpYears} years`,
    abstract: [
      `My passionate and inquiring nature lead me to a constant quest for new technical, intellectual, and human challenges.`,
      `This brought me to a wide variety of roles, from which I gained diverse knowledge and experience (software development and architecture, sysadmin and netadmin, teaching and pedagogy, management, communication, etc.).`,
      html`Web development &mdash; and more specifically the web platform, dev tools et standards &mdash; is my main focus since 2014, and a long-time passion.`,
    ],
    langs: {
      title: 'Languages',
      content: [
        'English: advanced (C1/C2)',
        'French: native & advanced',
        'Spanish: basics (A2)',
      ],
    },
  },
  intro: {
    callToAction: {
      ...frWordings.intro.callToAction,
      text: `Schedule an interview on`,
    },
    items: [
      {
        title: 'Web Architecture & Development',
        icon: {
          template: frWordings.intro.items[0].icon.template,
          caption: 'expertise',
        },
        content: [
          html`Holistic and objective mastery of <strong>Web development
            principles and fundamentals</strong> (Web Components,
            Web APIs, PWAs, PRPL, a11y, performance, etc.)`,
          html`Fluent in a wide variety of frameworks and libraries (<strong
              >Lit, Open WC, Angular, React, Vue, Redux, Gatsby, 11ty,
              etc.</strong
            >)`,
          html`Advanced expertise in
            <strong>Angular, Angular CLI & Nrwl/Nx</strong> (OSS contributor from
            2016 to 2018, then regular monitoring)`,
          html`Wrote a thorough <strong>book</strong> about modern web development fundamentals (published in french by 
            <em
              ><a
                href="https://www.editions-eni.fr/livre/developpement-et-architecture-des-applications-web-modernes-retrouver-les-fondamentaux-9782409029523"
                target="_blank"
                rel="noreferrer noopener"
                >ENI editions</a
              ></em
            >
            in 2021)`,
          html`Fullstack and DevOps proficiencies (REST, ORM, CI/CD, SGBD, Docker,
          PaaS, Node.js, Python, Java, etc.)`,
        ],
      },
      {
        title: 'Pedagogy',
        icon: {
          template: frWordings.intro.items[1].icon.template,
          caption: 'guiding thread',
        },
        content: [
          html`<strong>Mentoring</strong> and
            <strong>teaching</strong> are the backbone of my whole career`,
          html`Estensive and wide experience as an independant instructor, teacher, educational designer and teaching manager, having led large teams in both instructionnal and R&D environments`,
        ],
      },
      {
        title: 'Sharing & Research',
        icon: {
          template: frWordings.intro.items[2].icon.template,
          caption: 'motivations',
        },
        content: [
          html`Strong and long-standing interest for <strong>Open Source</strong> and the free culture mouvement in general`,
          html`Created and gave numerous <strong>workshops et lectures</strong>`,
          html`Love <strong>documentation, typing et testing</strong> and master the related tools and good practices`,
        ],
      },
    ],
  },
  experience: {
    title: 'Experience',
    dateIntervals: {
      noEnd: 'Since',
      start: 'From',
      end: 'to',
    },
    items: [
      [
        {
          company: {name: 'freelance'},
          startDate: 'jan. 2020',
          jobTitle: 'Consultant & Trainer',
          icon: frWordings.experience.items[0][0].icon,
          details: 'Web Development & Architecture',
        },
        {
          company: {name: 'Blindnet', details: 'start-up'},
          startDate: 'feb. 2022',
          endDate: 'oct. 2022',
          jobTitle: 'VP, Technology & Pedagogy',
          details: [
            'Leading Web, Java, and Scala development.',
            'Customer Support & Technical Documentation maintenance.',
            'Privacy Advocacy.',
          ],
          icon: frWordings.experience.items[0][1].icon,
        },
        {
          company: {
            name: 'ENI Editions',
            details: "book publisher",
          },
          jobTitle: 'Author',
          startDate: 'march 2020',
          endDate: 'march 2021',
          icon: frWordings.experience.items[0][2].icon,
          details: [
            html`Wrote a <a href=${urlLivreENI} target="_blank" rel="noferrer noopener"
                ><strong>thorough book</strong></a> bringing a new perspective on Modern Web Development fundamentals
              (608 pages).`,
            "Developed a wide variety of examples, tests, and automation tools (16500 lines of code).",
            'Created Open Source libraries, tools, scripts, and projects as proof of concepts and illustrations.',
          ],
        },
        {
          company: {
            name: 'Bonitasoft',
            details: 'Open Source Software Editor (BPM)',
          },
          jobTitle: 'Developer Advocate, Web',
          startDate: 'apr. 2019',
          endDate: 'oct. 2019',
          icon: frWordings.experience.items[0][3].icon,
          webp: frWordings.experience.items[0][3].webp,
          details: [
            html`<strong>DevX, performance, and modernization</strong> :
              lead and contribute to the migration from
              <em>AngularJS</em> to <em>Web Components</em>.`,
            "Set up strategies and tools to facilitate content creation and technical events management (via Gatsby, Netlify CMS & GitHub).",
          ],
        },
        {
          company: {name: 'SFEIR', details: 'ESN, 500 employés'},
          jobTitle: 'Developer Advocate / Web Architect',
          startDate: 'june 2018',
          endDate: 'apr. 2019',
          icon: frWordings.experience.items[0][4].icon,
          webp: frWordings.experience.items[0][4].webp,
          details: [
            html`<strong>Twofold mission</strong> : technical expertise (3d/w) and developer advocacy.`,
            html`Improved the stability and maintainability of an <strong>Angular, NgRx et Preact</strong> application as a technical leader for "la Société Générale".`,
            html`Supervision and training of a team of <strong>30 Angular developers</strong> (in both Paris & Hong Kong) for the BNP Paribas company.`,
            html`Audit and performance improvement of several Progressive Web Apps (<em>in VanillaJS, React, Vue, Angular</em>), migrations from AngularJS to Angular, defined the architecture for several new Web Apps, etc.`,
          ],
        },
      ],
      [
        {
          company: {name: 'Sedona', details: 'ESN, 100 employés'},
          jobTitle: 'Technical Director, Javascript / Web App Architect',
          startDate: 'dec. 2015',
          endDate: 'may 2018',
          icon: frWordings.experience.items[1][0].icon,
          webp: frWordings.experience.items[1][0].webp,
          details: [
            html`<strong>Architecture & Technical Direction for 8 front-end JavaScript projects</strong> (<em>AngularJS, JQuery, PHP et Node.js</em>), leading 3 teams of 12 developers.`,
            html`Defining the reference web front-end web architecture for Sedona and the <em>Harmonie Mutuelle</em> group.`,
            html`<strong>Modernisation</strong> of Web technologies usages for the whole groupe (Sedona, West, RedShift et Inadeo brands).`,
            html`<em>(From dec. 2016)</em> <strong>Lead Angular Architect</strong>, <em>Saint Gobain</em>: Defining and maintaining transversal guidelines and tooling for 3 projects, leading 6 teams (30 developers).`,
          ],
        },
        {
          company: {name: 'Française des Jeux'},
          jobTitle: 'Lead Developer AngularJS',
          startDate: 'june 2015',
          endDate: 'nov. 2015',
          icon: frWordings.experience.items[1][1].icon,
          webp: frWordings.experience.items[1][1].webp,
          details: html`Development of the account management and Euromillions "widgets" with <strong>AngularJS 1.4 and ES2015</strong> for the fdj.fr portal, leading a team of 8 developers.`,
          shortLine: true,
        },
        {
          company: {name: 'freelance'},
          jobTitle: 'Trainer, Consultant',
          startDate: 'mai 2011',
          endDate: 'nov. 2015',
          icon: frWordings.experience.items[1][2].icon,
          webp: frWordings.experience.items[1][2].webp,
          details: [
            html`<strong>38 courses</strong> delivered both on-line and face-to-face.`,
            html`<strong>3 applications</strong> Java (Spring, Struts, Hibernate) & Android developed.`,
          ],
          shortLine: true,
        },
        {
          company: {name: 'Supinfo', details: 'International University'},
          jobTitle: "Director of Unix Teaching",
          startDate: 'june 2010',
          endDate: 'apr. 2011',
          icon: frWordings.experience.items[1][3].icon,
          webp: frWordings.experience.items[1][3].webp,
          details: [
            html`Hiring and training <strong>70 teachers hired</strong> for <strong>Linux, Apple & Sécurité</strong> education on the 30 sites of the group.`,
            html`Defining, writing, and managing <strong>7 educational units</strong>.`,
          ],
          shortLine: true,
        },
        {
          company: {name: 'Supinfo'},
          jobTitle: 'Teacher / Trainer',
          startDate: 'oct. 2009',
          endDate: 'juin 2010',
          icon: frWordings.experience.items[1][4].icon,
          webp: frWordings.experience.items[1][4].webp,
          details:
            'Teaching 12 educational units on 18 sites, in 3 different countries.',
          shortLine: true,
        },
      ],
    ],
  },
  education: {
    title: 'Education',
    items: [
      {
        school: 'Supinfo International University',
        diploma: 'Master of IT Engineering',
        year: '2010',
      },
      {
        school: 'Toulouse Jean Jaurès University',
        diploma: 'Associate Degree in Applied Mathematics for Social Science',
        year: '2007',
      },
    ],
  },
  accomplishments: {
    title: 'Creations',
    groups: [
      {
        title: '28 Lectures & Workshops',
        items: [
          {
            headline: "Web Applications Architecture",
          },
          {
            headline: 'Web Performance',
          },
          {
            headline: 'Soft Skills',
          },
          {
            headline: "Corporate Strategy",
          },
          {
            headline: 'Web Development Frameworks & Libraries',
          },
          {
            headline: 'IT History',
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
            headline: 'Workplace Wellness',
          },
        ],
      },
      {
        title: '20+ Publications',
        items: [
          {
            headline: 'Reference Book',
          },
          {
            headline: 'Blogs',
          },
          {
            headline: `White Papers`,
          },
          {
            headline: `Training Manuals`,
          },
          {
            headline: `Technical & Organizational Documentations`,
          },
          {
            headline: `Copywriting`,
          },
        ],
      },
      {
        title: html`<span style="font-size: 32px; position: relative; top: +6px">∞</span> Open Source projects`,
        items: [
          {
            headline: 'CLIs',
          },
          {
            headline: 'Static Site Generators',
          },
          {
            headline: 'Framework and Libraries for Web Development',
          },
          {
            headline: 'Experiments, Technical Demonstrations, Proofs of Concepts...',
          },
        ],
      },
    ],
  },
  misc: {
    title: "Hobbies & Interests",
    content: [
      'Free Culture, Open Source & Ethical Source',
      'Pedagogy and Science Popularization',
      'Tabletop Roleplay & Board Games',
      'Mathematics & Theorical Physics',
      `Natural, Social & Cognitive Sciences`,
      'Legos, Model Creation & Puzzles',
    ],
  },
} satisfies ResumeWordings;
