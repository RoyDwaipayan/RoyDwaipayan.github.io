---
title: Hobbies
icon: fas fa-horse-head
order: 3
---

<div class="hobbies-section">
  <div class="tab-container">
    <div class="tab-buttons">
      <button onclick="showTab('chess')" class="tab-btn active" id="chess-btn">Chess</button>
      <button onclick="showTab('photo')" class="tab-btn" id="photo-btn">Photography</button>
      <button onclick="showTab('games')" class="tab-btn" id="games-btn">E-Sports/Gaming</button>
      <button onclick="showTab('travel')" class="tab-btn" id="travel-btn">Travel</button>
    </div>
    
    <div class="tab-content">
      <div id="chess" class="tab-pane active">
        <h2>Chess</h2>
        {% include chess.html %}
      </div>
      
      <div id="photo" class="tab-pane">
        <h2>Photography</h2>
        {% include photo.html %}
      </div>
      
      <div id="games" class="tab-pane">
        <h2>E-Sports & Gaming</h2>
        {% include gaming.html %}
      </div>
      
      <div id="travel" class="tab-pane">
        <h2>Travel</h2>
        {% include travel.html %}
      </div>
    </div>
  </div>
</div>

<style>
  .hobbies-section {
    margin: 30px 0;
  }
  
  .tab-container {
    background: #1a1a1a;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
  }
  
  .tab-buttons {
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
  
  .tab-content {
    padding: 30px;
    min-height: 500px;
  }
  
  .tab-pane {
    display: none;
  }
  
  .tab-pane.active {
    display: block;
    animation: fadeIn 0.5s ease-in;
  }
  
  .tab-pane h2 {
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
    .tab-buttons {
      flex-direction: column;
    }
    
    .tab-btn {
      border-bottom: 1px solid #444;
    }
  }
</style>

<script>
  function showTab(tabName) {
    // Hide all tab panes
    var panes = document.getElementsByClassName('tab-pane');
    for (var i = 0; i < panes.length; i++) {
      panes[i].classList.remove('active');
    }
    
    // Remove active class from all buttons
    var buttons = document.getElementsByClassName('tab-btn');
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].classList.remove('active');
    }
    
    // Show the selected tab pane
    document.getElementById(tabName).classList.add('active');
    
    // Add active class to the clicked button
    document.getElementById(tabName + '-btn').classList.add('active');
  }
  
  // Initialize with first tab
  document.addEventListener('DOMContentLoaded', function() {
    showTab('chess');
  });
</script>