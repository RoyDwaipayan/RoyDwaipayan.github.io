---
title: Hobbies
icon: fas fa-horse-head
order: 3
---

<div class="hobbies-container">
  <!-- Custom Tab Navigation -->
  <div class="tab-navigation">
    <button class="tab-button active" data-tab="chess">Chess</button>
    <button class="tab-button" data-tab="photo">Photography</button>
    <button class="tab-button" data-tab="games">E-Sports/Gaming</button>
    <button class="tab-button" data-tab="travel">Travel</button>
  </div>

  <!-- Tab Content -->
  <div class="tab-content">
    <div class="tab-pane active" id="chess">
      <h2>Chess</h2>
      {% include chess.html %}
    </div>
    <div class="tab-pane" id="photo">
      <h2>Photography</h2>
      {% include photo.html %}
    </div>
    <div class="tab-pane" id="games">
      <h2>E-Sports & Gaming</h2>
      {% include gaming.html %}
    </div>
    <div class="tab-pane" id="travel">
      <h2>Travel</h2>
      {% include travel.html %}
    </div>
  </div>
</div>

<style>
  .hobbies-container {
    margin: 20px 0;
    font-family: inherit;
  }

  .tab-navigation {
    display: flex;
    border-bottom: 2px solid #444;
    margin-bottom: 0;
    background: #1a1a1a;
    border-radius: 8px 8px 0 0;
    overflow: hidden;
  }

  .tab-button {
    flex: 1;
    padding: 15px 20px;
    background: transparent;
    border: none;
    color: #ddd;
    font-size: 16px;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.3s ease;
    border-bottom: 3px solid transparent;
  }

  .tab-button:hover {
    background: #333;
    color: #ffd700;
  }

  .tab-button.active {
    background: #222;
    color: #ffd700;
    border-bottom-color: #ffd700;
  }

  .tab-content {
    background: #1a1a1a;
    border: 2px solid #444;
    border-top: none;
    border-radius: 0 0 8px 8px;
    min-height: 400px;
  }

  .tab-pane {
    display: none;
    padding: 30px;
    animation: fadeIn 0.3s ease-in;
  }

  .tab-pane.active {
    display: block;
  }

  .tab-pane h2 {
    color: #ffd700;
    margin-bottom: 20px;
    font-size: 28px;
    border-bottom: 2px solid #444;
    padding-bottom: 10px;
  }

  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
  }

  /* Responsive design */
  @media (max-width: 768px) {
    .tab-navigation {
      flex-direction: column;
    }
    
    .tab-button {
      border-bottom: 1px solid #444;
      border-right: none;
    }
    
    .tab-button.active {
      border-bottom-color: #ffd700;
    }
  }
</style>

<script>
  document.addEventListener('DOMContentLoaded', function() {
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabPanes = document.querySelectorAll('.tab-pane');

    function switchTab(tabId) {
      // Remove active class from all buttons and panes
      tabButtons.forEach(btn => btn.classList.remove('active'));
      tabPanes.forEach(pane => pane.classList.remove('active'));

      // Add active class to clicked button and corresponding pane
      const activeButton = document.querySelector(`[data-tab="${tabId}"]`);
      const activePane = document.getElementById(tabId);

      if (activeButton && activePane) {
        activeButton.classList.add('active');
        activePane.classList.add('active');
      }
    }

    // Add click event listeners to all tab buttons
    tabButtons.forEach(button => {
      button.addEventListener('click', function() {
        const tabId = this.getAttribute('data-tab');
        switchTab(tabId);
      });
    });

    // Initialize with first tab active
    if (tabButtons.length > 0) {
      const firstTabId = tabButtons[0].getAttribute('data-tab');
      switchTab(firstTabId);
    }
  });
</script>