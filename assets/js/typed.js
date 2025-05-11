document.addEventListener('DOMContentLoaded', function () {
  const phrases = ['a Data Scientist', 'an AI Explorer', 'a Problem Solver'];
  let i = 0;
  const typed = document.querySelector('.typed-text');
  function type() {
    typed.textContent = phrases[i];
    i = (i + 1) % phrases.length;
    setTimeout(type, 2000);
  }
  type();
});
