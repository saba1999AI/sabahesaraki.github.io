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

  // ===== FADE-IN SCROLL ANIMATION =====
  const elements = document.querySelectorAll(".fade-in");

  if (elements.length > 0) {
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
            // Stop observing once element is visible
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1, // Trigger when 10% of element is visible
      }
    );

    elements.forEach((el) => observer.observe(el));

    // Fallback: show all elements immediately on large screens
    if (window.innerWidth >= 992) {
      elements.forEach((el) => el.classList.add("show"));
    }
  }
});

