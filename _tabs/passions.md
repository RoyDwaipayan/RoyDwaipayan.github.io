---
title: Hobbies
icon: fas fa-horse-head
order: 3
---

<div class="hobbies-container">
  <div class="tab-wrapper">
    <div class="tab-header">
      <button class="tab-btn active" onclick="switchTab('chess', event)">Chess</button>
      <button class="tab-btn" onclick="switchTab('photo', event)">Photography</button>
      <button class="tab-btn" onclick="switchTab('games', event)">E-Sports/Gaming</button>
      <button class="tab-btn" onclick="switchTab('travel', event)">Travel</button>
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
  
  .tab-body {
    padding: 30px;
    min-height: 500px;
  }
  
  .tab-content {
    display: none;
  }
  
  .tab-content.active {
    display: block;
    animation: fadeIn 0.5s ease-in;
  }
  
  .tab-content h2 {
    color: #ffd700;
    margin-bottom: 25px;
    font-size: 28px;
    border-bottom: 2px solid #444;
    padding-bottom: 10px;
  }
  
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
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
  function switchTab(tabName, event) {
    // Hide all tab contents
    var contents = document.querySelectorAll('.tab-content');
    for (var i = 0; i < contents.length; i++) {
      contents[i].classList.remove('active');
    }
    
    // Remove active class from all buttons
    var buttons = document.querySelectorAll('.tab-btn');
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].classList.remove('active');
    }
    
    // Show the selected tab content
    document.getElementById(tabName).classList.add('active');
    
    // Add active class to the clicked button
    if (event && event.target) {
      event.target.classList.add('active');
    }
  }
  
  // Initialize with first tab
  document.addEventListener('DOMContentLoaded', function() {
    // Set the first tab as active by default
    var firstTab = document.querySelector('.tab-btn');
    var firstContent = document.querySelector('.tab-content');
    if (firstTab && firstContent) {
      firstTab.classList.add('active');
      firstContent.classList.add('active');
    }
  });
</script>