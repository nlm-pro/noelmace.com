import 'dark-mode-toggle';

import type {
  DarkModeToggle,
  ColorSchemeChangeEvent,
} from 'dark-mode-toggle/src/dark-mode-toggle';

const darkModeToggle: DarkModeToggle =
  document.querySelector('dark-mode-toggle')!;
const themeColor: HTMLElement = document.querySelector(
  'meta[name="theme-color"]'
)!;
const msTitleColor: HTMLElement = document.querySelector(
  'meta[name="msapplication-TileColor"]'
)!;

const toggleTheme = (e: ColorSchemeChangeEvent) => {
  const darkModeOn = e.detail.colorScheme === 'dark' ? true : false;
  const primaryColor = darkModeOn ? 'hsl(0,0%,20%)' : '#24292e';
  themeColor.textContent = primaryColor;
  msTitleColor.textContent = primaryColor;
};

let searchParam = new URL(document.location.toString()).searchParams.get(
  'theme'
);

if (searchParam === 'dark' || searchParam === 'light') {
  darkModeToggle.setAttribute('mode', searchParam);
} else {
  searchParam = null;
}

document.addEventListener('colorschemechange', toggleTheme);

toggleTheme(
  new CustomEvent('color-scheme-change', {
    detail: {
      colorScheme: searchParam || darkModeToggle.mode,
    },
  })
);
