document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("darkModeToggle");

  // Restore dark mode preference
  if (localStorage.getItem("darkMode") === "enabled") {
    document.body.classList.add("dark-mode");
    toggle.textContent = "☀️ Light Mode";
  }

  toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
      toggle.textContent = "☀️ Light Mode";
      localStorage.setItem("darkMode", "enabled");
    } else {
      toggle.textContent = "🌙 Dark Mode";
      localStorage.setItem("darkMode", "disabled");
    }
  });
});

