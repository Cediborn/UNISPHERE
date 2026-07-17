// Unisphere — theme toggle. Persists choice in localStorage so it
// survives a refresh once this is deployed for real (not the Claude
// artifact preview sandbox, where localStorage is unavailable).

(function () {
  const STORAGE_KEY = "unisphere_theme";

  function applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    document.querySelectorAll("[data-theme-btn]").forEach((btn) => {
      btn.classList.toggle("is-active", btn.dataset.themeBtn === theme);
    });
  }

  function getInitialTheme() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved === "light" || saved === "dark") return saved;
    } catch (e) {}
    // Brand default is dark (matches the hero/orbit visual), so we
    // only defer to system preference when it explicitly says light.
    if (window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches) {
      return "light";
    }
    return "dark";
  }

  applyTheme(getInitialTheme());

  document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll("[data-theme-btn]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const theme = btn.dataset.themeBtn;
        applyTheme(theme);
        try { localStorage.setItem(STORAGE_KEY, theme); } catch (e) {}
      });
    });
  });
})();
