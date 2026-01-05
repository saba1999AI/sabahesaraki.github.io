/* VARIABLES */
:root {
  --bg-light: #fafafa;
  --bg-dark: #0f1220;
  --card-light: #fff;
  --card-dark: #1a1d3a;
  --text-light: #333;
  --text-dark: #e6e6f0;
  --accent: #6c63ff;
}

/* GLOBAL */
* { box-sizing: border-box; margin: 0; padding: 0; }
body {
  font-family: Arial, sans-serif;
  background: var(--bg-light);
  color: var(--text-light);
  transition: background 0.4s, color 0.4s;
}
body.dark-mode {
  background: var(--bg-dark);
  color: var(--text-dark);
}

/* HEADER */
header {
  background: #343a40;
  color: white;
  text-align: center;
  padding: 30px 20px;
}
header nav a {
  color: #ffc107;
  margin: 0 12px;
  text-decoration: none;
  font-weight: bold;
}
header button {
  margin-top: 12px;
  padding: 8px 16px;
  background: var(--accent);
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
}

/* SECTION CARD */
.section-card {
  background: var(--card-light);
  border-radius: 20px;
  padding: 35px;
  margin: 50px auto;
  max-width: 900px;
  box-shadow: 0 10px 25px rgba(0,0,0,0.08);
}
body.dark-mode .section-card {
  background: var(--card-dark);
}

/* PROJECT GRID */
.projects-section { padding: 40px 20px; }
.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
}
.project-card {
  background: var(--card-light);
  border-radius: 20px;
  padding: 18px;
  box-shadow: 0 10px 20px rgba(0,0,0,0.08);
  transition: transform 0.3s, background 0.4s;
}
body.dark-mode .project-card {
  background: var(--card-dark);
  color: var(--text-dark);
}
.project-card h3 {
  font-size: 1.1em;
  margin-bottom: 10px;
  color: var(--accent);
}
.project-buttons {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  margin-top: 10px;
}
.project-buttons a {
  padding: 8px 14px;
  background: var(--accent);
  color: #fff;
  text-decoration: none;
  border-radius: 8px;
}

/* PAGINATION */
.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  margin-top: 20px;
}
.pagination button {
  padding: 10px 18px;
  background: var(--accent);
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 6px;
}
#pageInfo { font-weight: 600; color: var(--accent); }

/* CONTACT / SOCIAL */
.contact-card, .social-links a {
  margin-top: 10px;
}
.social-links {
  display: flex;
  justify-content: center;
  gap: 12px;
  padding-top: 10px;
}
.social-links a {
  padding: 10px 18px;
  border-radius: 8px;
  background: linear-gradient(135deg, var(--accent), #4d47c3);
  color: #fff;
  text-decoration: none;
}
