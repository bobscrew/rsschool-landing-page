const STORAGE_KEY = "theme";

function getPreferredTheme() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved === "light" || saved === "dark") return saved;
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

function applyTheme(theme) {
  document.documentElement.dataset.theme = theme;

  const toggle = document.querySelector("[data-theme-toggle]");
  const label  = document.querySelector("[data-theme-label]");

  if (toggle) {
    toggle.setAttribute("aria-checked", theme === "dark" ? "true" : "false");
  }
  if (label) {
    label.textContent = theme === "dark" ? "DARK" : "LIGHT";
  }
}

export function initTheme() {
  applyTheme(getPreferredTheme());

  const toggle = document.querySelector("[data-theme-toggle]");
  if (!toggle) return;

  toggle.addEventListener("click", () => {
    const next =
      document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    applyTheme(next);
    localStorage.setItem(STORAGE_KEY, next);
  });
}