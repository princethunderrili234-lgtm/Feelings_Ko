// Grab elements from DOM
const envelopeContainer = document.getElementById('envelopeContainer');
const letterContainer = document.getElementById('letterContainer');
const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const questionTitle = document.getElementById('questionTitle');
const catImg = document.getElementById('catImg');
const buttonGroup = document.getElementById('buttonGroup');
const finalNote = document.getElementById('finalNote');

// Track how many times 'No' is clicked to grow the Yes button safely
let clickCount = 0;

// 1. Open envelope event
envelopeContainer.addEventListener('click', () => {
  envelopeContainer.style.display = 'none';
  letterContainer.style.display = 'block';
});

// 2. What happens when "No" is clicked (Make Yes button grow bigger!)
noBtn.addEventListener('click', () => {
  clickCount++;
  
  // Increase Yes button scale dynamically
  let currentScale = 1 + (clickCount * 0.3);
  yesBtn.style.transform = `scale(${currentScale})`;
  
  // Custom Tagalog responses when they click "No"
  const noTexts = ["Sure ka na ba?", "Talaga ba?", "Isip ka ulit!", "Wag naman ganyan :(", "Sige na please!"];
  if (clickCount <= noTexts.length) {
    noBtn.innerText = noTexts[clickCount - 1];
  }
});

// 3. What happens when "Yes" is clicked
yesBtn.addEventListener('click', () => {
  // Hide buttons and change title/image
  buttonGroup.style.display = 'none';
  questionTitle.style.display = 'none';
  
  // Swap to a happy/dancing cat animation
  catImg.src = "https://media.giphy.com/media/ICOgUNjpvO0PC/giphy.gif"; 
  
  // Reveal the final celebratory text/note
  finalNote.classList.remove('hidden');
});