document.addEventListener("DOMContentLoaded", () => {
  // ===== DARK MODE TOGGLE =====
  const toggle = document.getElementById("darkModeToggle");

  // Restore dark mode preference from localStorage
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

  // ===== SCROLL ANIMATION =====
  const elements = document.querySelectorAll(".fade-in");

  if (elements.length > 0) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
            // Optional: unobserve after animation
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    elements.forEach((el) => observer.observe(el));
  }
});

