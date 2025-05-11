---
layout: home
title: "Home"
---

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Dwaipayan Roy | Data Scientist</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="stylesheet" href="/assets/css/landing.css" />
  </head>

  <body>
    <!-- Hero Section -->
    <section class="hero">
      <img
        src="/assets/img/profile.jpeg"
        alt="Dwaipayan Roy"
        class="hero-image"
      />
      <h1>I am <span class="typed-text"></span></h1>
    </section>

    <!-- Skills Section -->
    <section class="skills">
      <h2>Skills</h2>
      <div class="skills-table">
        <p><strong>Languages:</strong> Python, SQL, R, Apex, Java, NoSQL</p>
        <p>
          <strong>Tools:</strong> Power BI, Tableau, Advanced Excel, Azure,
          GitHub, KNIME, Jira, Confluence, Qlik Sense, BigQuery, Streamlit
        </p>
        <p>
          <strong>ML & Analytics:</strong> Machine Learning, Deep Learning, NLP,
          Time Series, Causal Inference, Prompt Engineering, Time Series
          Forecasting, LLM Fine Tuning, RAG, AI Agents, Data Analysis, Data
          Visualization, Data Modelling, Communication
        </p>
        <p>
          <strong>Frameworks:</strong> TensorFlow, PyTorch, Scikit-learn,
          statsmodels, XGBoost, Pandas, NumPy, PySpark, OpenAI, LangChain,
          Matplotlib
        </p>
        <p>
          <strong>Cloud:</strong> Microsoft Azure, Snowflake, Google Analytics
        </p>
        <p>
          <strong>Certifications:</strong> Udemy Certified Data Scientist, Data
          Dashboards in Power BI, Google Analytics, KNIME Analytics L3
        </p>
      </div>
    </section>

    <!-- Projects Section -->
    <section class="projects">
      <h2>Projects</h2>
      <div class="project-grid">
        <a href="/project/diabetes" class="project-card">
          <img src="/assets/img/diabetes.png" alt="Diabetes Prediction" />
          <p>Diabetes Prediction</p>
        </a>
        <a href="/project/retail" class="project-card">
          <img src="/assets/img/retail.png" alt="Retail Forecasting" />
          <p>Retail Forecasting</p>
        </a>
        <!-- Add more project cards as needed -->
      </div>
    </section>

    <script>
      const phrases = [
        "a Data Scientist",
        "an AI Explorer",
        "a Problem Solver"
      ];
      let i = 0;
      const typed = document.querySelector(".typed-text");
      function type() {
        typed.textContent = phrases[i];
        i = (i + 1) % phrases.length;
        setTimeout(type, 2000);
      }
      type();
    </script>
  </body>
</html>
