---
title: Home
icon: fas fa-home
order: 0
layout: page
---
<div class="home-landing">
  <!-- Hero Section -->
  <section class="hero">
    <h1>I am <span class="typed-text"></span></h1>
  </section>

  <!-- Skills Section -->
  <section class="skills">
    <h2>Skills</h2>
    <div class="skills-table">
      <p><strong>Languages:</strong> Python, SQL, R, Apex, Java, NoSQL</p>
      <p><strong>Tools:</strong> Power BI, Tableau, Advanced Excel, Azure, GitHub, KNIME, Jira, Confluence, Qlik Sense, BigQuery, Streamlit</p>
      <p><strong>ML & Analytics:</strong> ML, Deep Learning, NLP, Time Series, Causal Inference, Prompt Engineering, LLM Fine Tuning, RAG</p>
      <p><strong>Frameworks:</strong> TensorFlow, PyTorch, Scikit-learn, XGBoost, LangChain, Matplotlib</p>
      <p><strong>Cloud:</strong> Azure, Snowflake, Google Analytics</p>
      <p><strong>Certifications:</strong> KNIME Analytics L3, Power BI Dashboards, Google Analytics</p>
    </div>
  </section>

  <!-- Projects Section -->
  <section class="projects">
    <h2>Projects</h2>
    {% include project-cards.html %}
  </section>

  <script src="/assets/js/typed_blink.js"></script>


  <script>
  document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll('img').forEach(img => {
      if (img.closest('.no-lightbox')) {
        img.classList.remove('zoomable');  // remove lightbox trigger class
        img.removeAttribute('data-zoom-src');
        }
      });
    });
  </script>
</div>


