const openMenuBtn = document.getElementById("openMenuButton");
const nav = document.getElementById("nav");
const hideMenu = document.getElementById("hideMenu");

openMenuBtn.addEventListener("click", () => {
  nav.style.top = "69px";
  openMenuBtn.style.display = "none"
  hideMenu.style.display = "block"  

});
hideMenu.addEventListener("click", () => {
  nav.style.top = "-200px";
  openMenuBtn.style.display = "flex"
  hideMenu.style.display = "none"

});

function toggleTheme() {
  const body = document.body;
  const themeIcon = document.getElementById("theme-icon");
  const currentTheme = body.getAttribute("data-theme") || "light";
  const newTheme = currentTheme === "light" ? "dark" : "light";

  body.setAttribute("data-theme", newTheme);
  updateThemeControl(themeIcon, newTheme);
  localStorage.setItem("theme", newTheme);
}

function updateThemeControl(themeIcon, theme) {
  if (!themeIcon) return;
  themeIcon.className = theme === "light"
    ? "fa-solid fa-sun theme-icon"
    : "fa-solid fa-moon theme-icon";
  themeIcon.parentElement.setAttribute(
    "aria-label",
    theme === "light" ? "Switch to dark mode" : "Switch to light mode"
  );
  themeIcon.parentElement.title = theme === "light" ? "Switch to dark mode" : "Switch to light mode";
}

document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    const theme = savedTheme || (prefersDark ? 'dark' : 'light');
    
    const body = document.body;
    const themeIcon = document.getElementById('theme-icon');
    
    body.setAttribute('data-theme', theme);
    updateThemeControl(themeIcon, theme);
    
    // Listen for system theme changes
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
        if (!localStorage.getItem('theme')) {
            const newTheme = e.matches ? 'dark' : 'light';
            body.setAttribute('data-theme', newTheme);
            updateThemeControl(themeIcon, newTheme);
        }
    });
});


