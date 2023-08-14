import "https://unpkg.com/dark-mode-toggle@0.5.2/dist/dark-mode-toggle.min.mjs";

const darkModeToggle = document.querySelector('dark-mode-toggle');
const themeColor = document.querySelector('meta[name="theme-color"]');
const msTitleColor = document.querySelector('meta[name="msapplication-TileColor"]');

const toggleTheme = (e) => {
  const darkModeOn = e.detail.colorScheme === 'dark' ? true : false;
  const primaryColor = darkModeOn ? 'hsl(0,0%,20%)' : '#24292e';
  themeColor.content = primaryColor;
  msTitleColor.content = primaryColor;
};

let searchParam = (new URL(document.location)).searchParams.get('theme');
if (searchParam === 'dark' || searchParam === 'light') {
  console.log(darkModeToggle);
  darkModeToggle.setAttribute('mode', searchParam);
}

document.addEventListener('colorschemechange', toggleTheme);
toggleTheme({detail: {colorScheme: searchParam || darkModeToggle.mode}});
