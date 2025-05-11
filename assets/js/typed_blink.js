document.addEventListener('DOMContentLoaded', function () {
  const typedTextSpan = document.querySelector('.typed-text');

  // If the .typed-text element doesn't exist, stop the script
  if (!typedTextSpan) {
    console.error("Error: Element with class 'typed-text' not found.");
    return;
  }

  // Create and append the cursor element dynamically
  const cursorSpan = document.createElement('span');
  cursorSpan.classList.add('cursor');
  cursorSpan.innerHTML = '|'; // You can use any character for the cursor, e.g., '_' or '▋'
  // Insert the cursor immediately after the typedTextSpan
  typedTextSpan.parentNode.insertBefore(cursorSpan, typedTextSpan.nextSibling);

  const phrases = [
    'a Data Scientist',
    'an AI Enthusiast',
    'a Problem Solver',
    'a Lifelong Learner'
  ];
  let phraseIndex = 0; // Current phrase index
  let charIndex = 0; // Current character index in the current phrase
  let isDeleting = false; // State: true if deleting, false if typing

  const typingSpeed = 80; // Time in ms to type a single character
  const erasingSpeed = 50; // Time in ms to erase a single character
  const delayBetweenPhrases = 2000; // Pause in ms after typing a phrase, before erasing
  const delayBeforeTypingNext = 500; // Pause in ms after erasing, before typing next phrase

  function typeEffect() {
    const currentPhrase = phrases[phraseIndex];

    if (isDeleting) {
      // Erasing mode
      typedTextSpan.textContent = currentPhrase.substring(0, charIndex - 1);
      charIndex--;

      if (charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length; // Move to the next phrase, loop back
        setTimeout(typeEffect, delayBeforeTypingNext);
      } else {
        setTimeout(typeEffect, erasingSpeed);
      }
    } else {
      // Typing mode
      typedTextSpan.textContent = currentPhrase.substring(0, charIndex + 1);
      charIndex++;

      if (charIndex === currentPhrase.length) {
        isDeleting = true;
        setTimeout(typeEffect, delayBetweenPhrases);
      } else {
        setTimeout(typeEffect, typingSpeed);
      }
    }
  }

  // Start the typing effect if there are phrases
  if (phrases.length > 0) {
    setTimeout(typeEffect, typingSpeed); // Initial delay before starting
  } else {
    typedTextSpan.textContent = ''; // Clear if no phrases
    cursorSpan.style.display = 'none'; // Hide cursor if no phrases
  }
});
