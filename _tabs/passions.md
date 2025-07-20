---
title: Hobbies
icon: fas fa-horse-head
order: 3
---

<div class="hobbies-container">
  <div class="tab-wrapper">
    <div class="tab-header">
      <input type="radio" name="hobby-tabs" id="chess-tab" class="tab-radio" checked>
      <label for="chess-tab" class="tab-btn">Chess</label>
      
      <input type="radio" name="hobby-tabs" id="photo-tab" class="tab-radio">
      <label for="photo-tab" class="tab-btn">Photography</label>
      
      <input type="radio" name="hobby-tabs" id="games-tab" class="tab-radio">
      <label for="games-tab" class="tab-btn">E-Sports/Gaming</label>
      
      <input type="radio" name="hobby-tabs" id="travel-tab" class="tab-radio">
      <label for="travel-tab" class="tab-btn">Travel</label>
    </div>
    
    <div class="tab-body">
      <div id="chess-content" class="tab-content">
        <h2>Chess</h2>
        {% include chess.html %}
      </div>
      
      <div id="photo-content" class="tab-content">
        <h2>Photography</h2>
        {% include photo.html %}
      </div>
      
      <div id="games-content" class="tab-content">
        <h2>E-Sports & Gaming</h2>
        {% include gaming.html %}
      </div>
      
      <div id="travel-content" class="tab-content">
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
    position: relative;
  }
  
  .tab-radio {
    display: none;
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
    text-align: center;
    display: block;
  }
  
  .tab-btn:hover {
    background: #333;
    color: #ffd700;
  }
  
  .tab-radio:checked + .tab-btn {
    background: #1a1a1a;
    color: #ffd700;
    border-bottom-color: #ffd700;
  }
  
  .tab-radio:checked + .tab-btn::after {
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
  
  /* CSS-only tab switching */
  #chess-tab:checked ~ .tab-body #chess-content,
  #photo-tab:checked ~ .tab-body #photo-content,
  #games-tab:checked ~ .tab-body #games-content,
  #travel-tab:checked ~ .tab-body #travel-content {
    display: block;
    opacity: 1;
    transform: translateY(0);
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
  // Fallback JavaScript for additional functionality
  document.addEventListener('DOMContentLoaded', function() {
    console.log('Hobbies page loaded');
    
    // Add smooth transitions when tabs are clicked
    const tabRadios = document.querySelectorAll('.tab-radio');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabRadios.forEach(radio => {
      radio.addEventListener('change', function() {
        // Remove active class from all contents
        tabContents.forEach(content => {
          content.classList.remove('active');
        });
        
        // Add active class to selected content
        const targetId = this.id.replace('-tab', '-content');
        const targetContent = document.getElementById(targetId);
        if (targetContent) {
          targetContent.classList.add('active');
        }
      });
    });
    
    // Initialize first tab
    const firstRadio = document.querySelector('.tab-radio');
    if (firstRadio) {
      firstRadio.checked = true;
      const firstContentId = firstRadio.id.replace('-tab', '-content');
      const firstContent = document.getElementById(firstContentId);
      if (firstContent) {
        firstContent.classList.add('active');
      }
    }
  });
</script>