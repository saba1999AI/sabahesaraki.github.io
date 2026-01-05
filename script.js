document.addEventListener("DOMContentLoaded", () => {
  // Dark Mode toggle
  const toggle = document.getElementById("darkModeToggle");
  if(localStorage.getItem("darkMode") === "enabled") {
    document.body.classList.add("dark-mode");
    toggle.textContent = "☀️ Light Mode";
  }
  toggle.onclick = () => {
    document.body.classList.toggle("dark-mode");
    const enabled = document.body.classList.contains("dark-mode");
    localStorage.setItem("darkMode", enabled ? "enabled" : "disabled");
    toggle.textContent = enabled ? "☀️ Light Mode" : "🌙 Dark Mode";
  };

  // Publications
  const publications = [
    {title:"Breast Cancer Ultrasound Image Segmentation Using 3DUnet++", view:"#", pdf:"#"},
    {title:"CaPsF: Capsule Fusion for Extracting Psychiatric Stressors", view:"#", pdf:"#"},
    {title:"Multi-Class Alzheimer's Disease Classification Using Swin Transformer & GWO", view:"#", pdf:"#"},
    {title:"DKG-LLM: Dynamic Knowledge Graph + LLM Integration", view:"#", pdf:"#"},
    {title:"Cloud-Driven Generative AI Techniques for Medical Imaging Datasets", view:"#", pdf:"#"},
    {title:"UNet++ & LSTM Combined Approach for Breast Segmentation", view:"#", pdf:"#"},
    {title:"Evaluation Metrics in Learning Systems: A Survey", view:"#", pdf:"#"},
    {title:"BertCaps: BERT Capsule for Persian Multi-Domain Sentiment Analysis", view:"#", pdf:"#"},
    {title:"Classifying Objects in 3D Point Clouds Using GRU-LSTM", view:"#", pdf:"#"},
    {title:"A Comprehensive Analysis on ML Methods for Lung Cancer Classification", view:"#", pdf:"#"},
    {title:"Survey on Whole Slide Image in Pathology", view:"#", pdf:"#"},
    {title:"Other Research Projects", view:"#", pdf:"#"}
  ];

  const listEl = document.getElementById("publication-list");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");
  const pageInfo = document.getElementById("pageInfo");

  let currentPage = 1;
  const perPage = 6;
  const totalPages = Math.ceil(publications.length/perPage);

  function renderPage(page){
    listEl.innerHTML = "";
    const start = (page-1)*perPage;
    const end = start+perPage;
    publications.slice(start,end).forEach(pub => {
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
  }

  prevBtn.onclick = () => { if(currentPage>1){ currentPage--; renderPage(currentPage); }};
  nextBtn.onclick = () => { if(currentPage<totalPages){ currentPage++; renderPage(currentPage); }};

  renderPage(currentPage);
});
