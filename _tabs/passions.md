---
title: Hobbies
icon: fas fa-horse-head
order: 3
---

<div class="container mt-4">
  <!-- Bootstrap Nav Tabs -->
  <ul class="nav nav-tabs" id="projectTabs" role="tablist">
    <li class="nav-item">
      <a class="nav-link active" id="ml-tab" data-bs-toggle="tab" href="#chess" role="tab">Chess</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" id="bi-tab" data-bs-toggle="tab" href="#photo" role="tab">Photography</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" id="research-tab" data-bs-toggle="tab" href="#games" role="tab">E-Sports/Gaming</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" id="research-tab" data-bs-toggle="tab" href="#travel" role="tab">Travel</a>
    </li>
  </ul>

  <!-- Tab Content -->
  <div class="tab-content p-3 border border-top-0" id="projectTabContent">
    <div class="tab-pane fade show active" id="chess" role="tabpanel">
      <h2>Chess</h2>
        {% include chess.html %}
        <noscript><p>Please enable JavaScript to view content.</p></noscript>
    </div>
    <div class="tab-pane fade" id="photo" role="tabpanel">
      <h4>Photography</h4>
        {% include photo.html %}
        <noscript><p>Please enable JavaScript to view content.</p></noscript>
    </div>
    <div class="tab-pane fade" id="games" role="tabpanel">
      <h4>E-Sports</h4>
        {% include gaming.html %}
        <noscript><p>Please enable JavaScript to view content.</p></noscript>
    </div>
    <div class="tab-pane fade" id="travel" role="tabpanel">
      <h4>Travel</h4>
        {% include travel.html %}
        <noscript><p>Please enable JavaScript to view content.</p></noscript>
    </div>
  </div>
</div>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>

<!-- AOS Library -->
<link href="https://cdn.jsdelivr.net/npm/aos@2.3.4/dist/aos.css" rel="stylesheet">
<script src="https://cdn.jsdelivr.net/npm/aos@2.3.4/dist/aos.js"></script>

<script>
  AOS.init({
    duration: 1200,  
    once: false      
  });
</script>

<script>
  document.addEventListener('DOMContentLoaded', function () {
    const tabs = document.querySelectorAll('[data-bs-toggle="tab"]');

    tabs.forEach(tab => {
      tab.addEventListener('shown.bs.tab', function (e) {
        const tabPaneId = e.target.getAttribute('href'); 
        const tabPane = document.querySelector(tabPaneId);

        if (tabPane) {
          
          tabPane.querySelectorAll('[data-aos]').forEach(el => {
            el.classList.remove('aos-animate'); 
            void el.offsetWidth;                
          });

          AOS.refreshHard();
        }
      });
    });
  });
</script>