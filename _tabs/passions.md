---
title: Hobbies
icon: fas fa-horse-head
order: 3
---

<div class="container mt-4">
  <!-- Bootstrap Nav Tabs -->
  <ul class="nav nav-tabs" id="hobbyTabs" role="tablist">
    <li class="nav-item">
      <a class="nav-link active" id="chess-tab" data-bs-toggle="tab" href="#chess" role="tab" aria-controls="chess" aria-selected="true">Chess</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" id="photo-tab" data-bs-toggle="tab" href="#photo" role="tab" aria-controls="photo" aria-selected="false">Photography</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" id="games-tab" data-bs-toggle="tab" href="#games" role="tab" aria-controls="games" aria-selected="false">E-Sports/Gaming</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" id="travel-tab" data-bs-toggle="tab" href="#travel" role="tab" aria-controls="travel" aria-selected="false">Travel</a>
    </li>
  </ul>

  <!-- Tab Content -->
  <div class="tab-content" id="hobbyTabContent">
    <div class="tab-pane fade show active" id="chess" role="tabpanel" aria-labelledby="chess-tab">
      <div class="p-3">
        <h2>Chess</h2>
        {% include chess.html %}
      </div>
    </div>
    <div class="tab-pane fade" id="photo" role="tabpanel" aria-labelledby="photo-tab">
      <div class="p-3">
        <h2>Photography</h2>
        {% include photo.html %}
      </div>
    </div>
    <div class="tab-pane fade" id="games" role="tabpanel" aria-labelledby="games-tab">
      <div class="p-3">
        <h2>E-Sports & Gaming</h2>
        {% include gaming.html %}
      </div>
    </div>
    <div class="tab-pane fade" id="travel" role="tabpanel" aria-labelledby="travel-tab">
      <div class="p-3">
        <h2>Travel</h2>
        {% include travel.html %}
      </div>
    </div>
  </div>
</div>

<!-- AOS Library -->
<link href="https://cdn.jsdelivr.net/npm/aos@2.3.4/dist/aos.css" rel="stylesheet">
<script src="https://cdn.jsdelivr.net/npm/aos@2.3.4/dist/aos.js"></script>

<script>
  document.addEventListener('DOMContentLoaded', function() {
    // Initialize AOS
    if (typeof AOS !== 'undefined') {
      AOS.init({
        duration: 1200,
        once: false
      });
    }

    // Initialize Bootstrap tabs
    if (typeof bootstrap !== 'undefined') {
      const triggerTabList = document.querySelectorAll('#hobbyTabs a[data-bs-toggle="tab"]');
      triggerTabList.forEach(triggerEl => {
        const tabTrigger = new bootstrap.Tab(triggerEl);
        
        triggerEl.addEventListener('click', event => {
          event.preventDefault();
          tabTrigger.show();
        });
      });

      // Handle tab changes to refresh AOS
      const tabs = document.querySelectorAll('[data-bs-toggle="tab"]');
      tabs.forEach(tab => {
        tab.addEventListener('shown.bs.tab', function(e) {
          const tabPaneId = e.target.getAttribute('href');
          const tabPane = document.querySelector(tabPaneId);
          
          if (tabPane && typeof AOS !== 'undefined') {
            // Reset AOS animations in the new tab
            tabPane.querySelectorAll('[data-aos]').forEach(el => {
              el.classList.remove('aos-animate');
              void el.offsetWidth; // Trigger reflow
            });
            
            AOS.refreshHard();
          }
        });
      });
    }
  });
</script>

<style>
  .nav-tabs {
    border-bottom: 1px solid #444;
  }
  
  .nav-tabs .nav-link {
    color: #ddd;
    border: 1px solid transparent;
    border-radius: 4px 4px 0 0;
    margin-right: 4px;
  }
  
  .nav-tabs .nav-link:hover {
    color: #ffd700;
    border-color: #444 #444 transparent;
  }
  
  .nav-tabs .nav-link.active {
    color: #ffd700;
    background-color: #222;
    border-color: #444 #444 #222;
  }
  
  .tab-content {
    border: 1px solid #444;
    border-top: none;
    background-color: #1a1a1a;
    border-radius: 0 0 4px 4px;
  }
  
  .tab-pane {
    padding: 20px;
  }
</style>