---
title: Hobbies
icon: fas fa-horse-head
order: 3
---

<div class="hobbies-container">
  <div class="tab-wrapper">
    <div class="tab-header" id="hobby-tabs">
      <button class="tab-btn active" data-tab="chess">Chess</button>
      <button class="tab-btn" data-tab="photo">Photography</button>
      <button class="tab-btn" data-tab="games">E-Sports/Gaming</button>
      <button class="tab-btn" data-tab="travel">Travel</button>
    </div>
    
    <div class="tab-body">
      <div id="chess" class="tab-content active">
        <h2>Chess</h2>
        {% include chess.html %}
      </div>
      
      <div id="photo" class="tab-content">
        <h2>Photography</h2>
        {% include photo.html %}
      </div>
      
      <div id="games" class="tab-content">
        <h2>E-Sports & Gaming</h2>
        {% include gaming.html %}
      </div>
      
      <div id="travel" class="tab-content">
        <h2>Travel</h2>
        {% include travel.html %}
      </div>
    </div>
  </div>
</div>

<style>
  .hobbies-container {
    margin: 30px 0;
  }
  
  .tab-wrapper {
    background: #1a1a1a;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
  }
  
  .tab-header {
    display: flex;
    background: #222;
    border-bottom: 2px solid #444;
  }
  
  .tab-btn {
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
    position: relative;
  }
  
  .tab-btn:hover {
    background: #333;
    color: #ffd700;
  }
  
  .tab-btn.active {
    background: #1a1a1a;
    color: #ffd700;
    border-bottom-color: #ffd700;
  }
  
  .tab-btn.active::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: #ffd700;
  }
  
  .tab-body {
    padding: 30px;
    min-height: 500px;
  }
  
  .tab-content {
    display: none;
    opacity: 0;
    transform: translateY(10px);
    transition: all 0.3s ease;
  }
  
  .tab-content.active {
    display: block;
    opacity: 1;
    transform: translateY(0);
  }
  
  .tab-content h2 {
    color: #ffd700;
    margin-bottom: 25px;
    font-size: 28px;
    border-bottom: 2px solid #444;
    padding-bottom: 10px;
  }
  
  @media (max-width: 768px) {
    .tab-header {
      flex-direction: column;
    }
    
    .tab-btn {
      border-bottom: 1px solid #444;
    }
  }
</style>

<script>
  document.addEventListener('DOMContentLoaded', function() {
    const tabContainer = document.getElementById('hobby-tabs');
    const tabContents = document.querySelectorAll('.tab-content');
    const tabButtons = document.querySelectorAll('.tab-btn');
    
    // Function to switch tabs
    function switchTab(tabId) {
      // Hide all tab contents
      tabContents.forEach(content => {
        content.classList.remove('active');
      });
      
      // Remove active class from all buttons
      tabButtons.forEach(button => {
        button.classList.remove('active');
      });
      
      // Show the selected tab content
      const selectedContent = document.getElementById(tabId);
      if (selectedContent) {
        selectedContent.classList.add('active');
      }
      
      // Add active class to the clicked button
      const activeButton = document.querySelector(`[data-tab="${tabId}"]`);
      if (activeButton) {
        activeButton.classList.add('active');
      }
    }
    
    // Add click event listeners to all tab buttons
    tabButtons.forEach(button => {
      button.addEventListener('click', function(e) {
        e.preventDefault();
        const tabId = this.getAttribute('data-tab');
        switchTab(tabId);
      });
    });
    
    // Initialize with first tab
    if (tabButtons.length > 0) {
      const firstTabId = tabButtons[0].getAttribute('data-tab');
      switchTab(firstTabId);
    }
  });
</script>