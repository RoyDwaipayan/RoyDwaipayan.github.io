---
title: Passions
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
      <a class="nav-link" id="research-tab" data-bs-toggle="tab" href="#tech" role="tab">Tech</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" id="research-tab" data-bs-toggle="tab" href="#travel" role="tab">Travel</a>
    </li>
  </ul>

  <!-- Tab Content -->
  <div class="tab-content p-3 border border-top-0" id="projectTabContent">
    <div class="tab-pane fade show active" id="chess" role="tabpanel">
      <h4>Chess</h4>
        {% include chess.html %}
    </div>
    <div class="tab-pane fade" id="photo" role="tabpanel">
      <h4>Photography</h4>
        {% include photo.html %}
    </div>
    <div class="tab-pane fade" id="tech" role="tabpanel">
      <h4>Techie</h4>
        {% include tech.html %}
    </div>
    <div class="tab-pane fade" id="travel" role="tabpanel">
      <h4>Travel</h4>
        {% include travel.html %}
    </div>
  </div>
</div>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>

