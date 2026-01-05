document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("darkModeToggle");
  const publicationList = document.getElementById("publication-list");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");

  const publications = [
    {
      title: "Survey on Whole Slide Image in Pathology: Deep Learning and Machine Learning Approaches",
      view: "https://scholar.google.com/scholar?cluster=XXXXXXXXXX",
      pdf: "pdfs/Whole_Slide_Image.pdf"
    },
    {
      title: "A Combined UNet++ and LSTM Approach for Breast Ultrasound Image Segmentation",
      view: "https://scholar.google.com/scholar?cluster=YYYYYYYYYY",
      pdf: "pdfs/UNet_LSTM_Breast.pdf"
    },
    {
      title: "A Comprehensive Analysis on Machine Learning Based Methods for Lung Cancer Level Classification",
      view: "https://scholar.google.com/scholar?cluster=ZZZZZZZZZZ",
      pdf: "pdfs/Lung_Cancer_Classification.pdf"
    },
    {
      title: "Multi-Class Alzheimer’s Disease Classification Using Swin Transformer, Wavelet & GWO",
      view: "https://scholar.google.com/scholar?cluster=AAAAAAAAAA",
      pdf: "pdfs/Alzheimer_SwinGWO.pdf"
    },
    {
      title: "Evaluation Metrics in Learning Systems: A Survey",
      view: "https://scholar.google.com/scholar?cluster=BBBBBBBBBB",
      pdf: "pdfs/Evaluation_Metrics_Survey.pdf"
    },
    {
      title: "DKG‑LLM: Dynamic Knowledge Graph + LLM Integration",
      view: "https://scholar.google.com/scholar?cluster=CCCCCCCCCC",
      pdf: "pdfs/DKG_LLM.pdf"
    },
    {
      title: "Cloud‑Driven Generative AI Techniques for Augmenting Medical Imaging Datasets",
      view: "https://scholar.google.com/scholar?cluster=DDDDDDDDDD",
      pdf: "pdfs/Cloud_Generative_AI.pdf"
    },
    {
      title: "Breast Cancer Ultrasound Image Segmentation Using Improved 3DUnet++",
      view: "https://scholar.google.com/scholar?cluster=EEEEEEEEEE",
      pdf: "pdfs/3DUnet_Breast.pdf"
    },
    {
      title: "CaPsF: Capsule Fusion ... from Twitter",
      view: "https://scholar.google.com/scholar?cluster=FFFFFFFFFF",
      pdf: "pdfs/CaPsF.pdf"
    },
    {
      title: "BertCaps: BERT Capsule for Persian Multi‑Domain Sentiment Analysis",
      view: "https://scholar.google.com/scholar?cluster=GGGGGGGGGG",
      pdf: "pdfs/BertCaps.pdf"
    },
    {
      title: "UNet++ and LSTM Combined Approach for Breast Ultrasound Image Segmentation",
      view: "https://scholar.google.com/scholar?cluster=HHHHHHHHHH",
      pdf: "pdfs/UNet_LSTM_Breast2.pdf"
    },
    {
      title: "Classifying Objects in 3D Point Clouds Using GRU‑LSTM Hybrid",
      view: "https://scholar.google.com/scholar?cluster=IIIIIIIIII",
      pdf: "pdfs/3DPointClouds_GRU_LSTM.pdf"
    }
  ];

  let currentPage = 1;
  const perPage = 6;
  const totalPages = Math.ceil(publications.length / perPage);

  function renderPage(page) {
    publicationList.innerHTML = "";
    const start = (page - 1) * perPage;
    const end = start + perPage;
    const items = publications.slice(start, end);

    items.forEach(pub => {
      const card = document.createElement("div");
      card.classList.add("project-card");
      card.innerHTML = `
        <h3>${pub.title}</h3>
        <div class="project-buttons">
          <a href="${pub.view}" target="_blank">View Online</a>
          <a href="${pub.pdf}" target="_blank">Download PDF</a>
        </div>
      `;
      publicationList.appendChild(card);
    });
  }

  prevBtn.onclick = () => {
    if (currentPage > 1) {
      currentPage--;
      renderPage(currentPage);
    }
  };

  nextBtn.onclick = () => {
    if (currentPage < totalPages) {
      currentPage++;
      renderPage(currentPage);
    }
  };

  renderPage(currentPage);

  // Dark mode toggle
  if (localStorage.getItem("darkMode") === "enabled") {
    document.body.classList.add("dark-mode");
    toggle.textContent = "☀️ Light Mode";
  }

  toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    localStorage.setItem("darkMode", document.body.classList.contains("dark-mode") ? "enabled" : "disabled");
    toggle.textContent = document.body.classList.contains("dark-mode") ? "☀️ Light Mode" : "🌙 Dark Mode";
  });
});
