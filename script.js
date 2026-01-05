document.addEventListener("DOMContentLoaded", () => {

  // Dark mode toggle
  const toggle = document.getElementById("darkModeToggle");
  if (localStorage.getItem("darkMode") === "enabled") {
    document.body.classList.add("dark-mode");
    toggle.textContent = "☀️ Light Mode";
  }
  toggle.onclick = () => {
    document.body.classList.toggle("dark-mode");
    const enabled = document.body.classList.contains("dark-mode");
    localStorage.setItem("darkMode", enabled ? "enabled" : "disabled");
    toggle.textContent = enabled ? "☀️ Light Mode" : "🌙 Dark Mode";
  };

  const publications = [
    { title: "Breast Cancer Ultrasound Image Segmentation Using Improved 3DUnet++", view: "https://doi.org/10.1016/j.wfumbo.2024.100068", pdf: "https://raw.githubusercontent.com/saba1999ai/publications/main/pdfs/1_BreastCancer_3DUnet.pdf" },
    { title: "Evaluation Metrics in Learning Systems: A Survey", view: "https://doi.org/10.20944/preprints202508.1594.v1", pdf: "https://raw.githubusercontent.com/saba1999ai/publications/main/pdfs/2_EvaluationMetrics_Survey.pdf" },
    { title: "CapsF: Capsule Fusion for Extracting Psychiatric Stressors", view: "https://dblp.org/rec/journals/corr/abs-2403-15391", pdf: "https://raw.githubusercontent.com/saba1999ai/publications/main/pdfs/3_CapsF_Psychiatric.pdf" },
    { title: "UNet++ and LSTM Combined Approach for Breast Ultrasound Image Segmentation", view: "https://jglobal.jst.go.jp/en/public/202502210881703352", pdf: "https://raw.githubusercontent.com/saba1999ai/publications/main/pdfs/4_UNet_LSTM_BreastSeg.pdf" },
    { title: "Classifying Objects in 3D Point Clouds Using GRU‑LSTM Hybrid Approach", view: "https://www.preprints.org/manuscript/202403.0775/v1/download", pdf: "https://raw.githubusercontent.com/saba1999ai/publications/main/pdfs/5_3DPointCloud_GRU_LSTM.pdf" },
    { title: "Multi-Class Alzheimer’s Disease Classification Using Swin Transformer & GWO", view: "#", pdf: "https://raw.githubusercontent.com/saba1999ai/publications/main/pdfs/6_Alzheimer_SwinGWO.pdf" },
    { title: "Cloud‑Driven Generative AI Techniques for Augmenting Medical Imaging Datasets", view: "#", pdf: "https://raw.githubusercontent.com/saba1999ai/publications/main/pdfs/7_CloudGenerativeAI.pdf" },
    { title: "A Comprehensive Analysis on ML Based Methods for Lung Cancer Classification", view: "#", pdf: "https://raw.githubusercontent.com/saba1999ai/publications/main/pdfs/8_LungCancer_ML.pdf" },
    { title: "BertCaps: BERT Capsule for Persian Multi‑Domain Sentiment Analysis", view: "#", pdf: "https://raw.githubusercontent.com/saba1999ai/publications/main/pdfs/9_BertCaps.pdf" },
    { title: "Survey on Whole Slide Image in Pathology: Deep learning and Machine learning approaches", view: "#", pdf: "https://raw.githubusercontent.com/saba1999ai/publications/main/pdfs/10_ProjectX.pdf" },
    { title: "Gaussian Mixture Recurrent Neural Network for Pathogen Detection of Salmonella Enterica: Time series NP-hard problem", view: "#", pdf: "https://raw.githubusercontent.com/saba1999ai/publications/main/pdfs/11_ProjectY.pdf" },
    { title: "Independently Recurrent Neural Network XGBoost (IXGBOOST) proposed method for Short-term load forecasting", view: "#", pdf: "https://raw.githubusercontent.com/saba1999ai/publications/main/pdfs/12_ProjectZ.pdf" }
  ];

  const listEl = document.getElementById("publication-list");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");
  const pageInfo = document.getElementById("pageInfo");

  let currentPage = 1;
  const perPage = 6;
  const totalPages = Math.ceil(publications.length / perPage);

  function renderPage(page) {
    listEl.innerHTML = "";
    const start = (page - 1) * perPage;
    const end = start + perPage;
    const pageItems = publications.slice(start, end); // Ensure slice includes last items

    pageItems.forEach(pub => {
      const card = document.createElement("div");
      card.className = "project-card";
      card.innerHTML = `
        <h3>${pub.title}</h3>
        <div class="project-buttons">
          <a href="${pub.view}" target="_blank">View Online</a>
          <a href="${pub.pdf}" target="_blank">Download PDF</a>
        </div>
      `;
      listEl.appendChild(card);
    });

    pageInfo.textContent = `Page ${currentPage} of ${totalPages}`;
    prevBtn.disabled = currentPage === 1;
    nextBtn.disabled = currentPage === totalPages;
  }

  prevBtn.onclick = () => { if (currentPage > 1) { currentPage--; renderPage(currentPage); } };
  nextBtn.onclick = () => { if (currentPage < totalPages) { currentPage++; renderPage(currentPage); } };

  renderPage(currentPage);
});
