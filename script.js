document.addEventListener("DOMContentLoaded", () => {
  // ---------------- Dark Mode ----------------
  const toggle = document.getElementById("darkModeToggle");
  if (localStorage.getItem("darkMode") === "enabled") {
    document.body.classList.add("dark-mode");
    toggle.textContent = "☀️ Light Mode";
  }

  toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    const isDark = document.body.classList.contains("dark-mode");
    toggle.textContent = isDark ? "☀️ Light Mode" : "🌙 Dark Mode";
    localStorage.setItem("darkMode", isDark ? "enabled" : "disabled");
  });

  // ---------------- Publications ----------------
  const publicationList = document.getElementById("publication-list");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");
  const pageInfo = document.getElementById("pageInfo");

  // Example publications (replace '#' with actual DOI / publisher URLs)
  const publications = [
    { title: "Survey on Whole Slide Image in Pathology: Deep Learning and Machine Learning Approaches", view: "#", pdf: "#" },
    { title: "A Combined UNet++ and LSTM Approach for Breast Ultrasound Image Segmentation", view: "#", pdf: "#" },
    { title: "A Comprehensive Analysis on Machine Learning Based Methods for Lung Cancer Level Classification", view: "#", pdf: "#" },
    { title: "Multi-Class Alzheimer’s Disease Classification Using Swin Transformer, Wavelet & GWO", view: "#", pdf: "#" },
    { title: "Evaluation Metrics in Learning Systems: A Survey", view: "#", pdf: "#" },
    { title: "DKG‑LLM: Dynamic Knowledge Graph + LLM Integration", view: "#", pdf: "#" },
    { title: "Cloud‑Driven Generative AI Techniques for Augmenting Medical Imaging Datasets", view: "#", pdf: "#" },
    { title: "Breast Cancer Ultrasound Image Segmentation Using Improved 3DUnet++", view: "#", pdf: "#" },
    { title: "CaPsF: Capsule Fusion for Extracting Psychiatric Stressors from Twitter", view: "#", pdf: "#" },
    { title: "BertCaps: BERT Capsule for Persian Multi‑Domain Sentiment Analysis", view: "#", pdf: "#" },
    { title: "UNet++ and LSTM Combined Approach for Breast Ultrasound Image Segmentation", view: "#", pdf: "#" },
    { title: "Classifying Objects in 3D Point Clouds Using GRU‑LSTM Hybrid", view: "#", pdf: "#" }
  ];

  let currentPage = 1;
  const perPage = 6;
  const totalPages = Math.ceil(publications.length / perPage);

  function renderPage(page) {
    publicationList.innerHTML = "";
    const start = (page - 1) * perPage;
    const end = start + perPage;
    const currentItems = publications.slice(start, end);

    currentItems.forEach(pub => {
      const card = document.createElement("div");
      card.className = "project-card";
      card.innerHTML = `
        <h3>${pub.title}</h3>
        <div class="project-buttons">
          <a href="${pub.view}" target="_blank">View Online</a>
          <a href="${pub.pdf}" target="_blank">Download PDF</a>
        </div>
      `;
      publicationList.appendChild(card);
    });

    pageInfo.textContent = `Page ${currentPage} of ${totalPages}`;
  }

  prevBtn.addEventListener("click", () => {
    if (currentPage > 1) {
      currentPage--;
      renderPage(currentPage);
    }
  });

  nextBtn.addEventListener("click", () => {
    if (currentPage < totalPages) {
      currentPage++;
      renderPage(currentPage);
    }
  });

  // Initial render
  renderPage(currentPage);
});

