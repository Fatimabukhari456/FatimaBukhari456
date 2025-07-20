// Contact form alert
document.getElementById('contactForm').addEventListener('submit', e => {
  e.preventDefault();
  alert('Thanks for your message! I will contact you soon.');
  e.target.reset();
});

// Achievements slider setup
const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
const dotsContainer = document.querySelector('.dots');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let currentIndex = 0;

// Create dots
slides.forEach((_, i) => {
  const dot = document.createElement('button');
  if (i === 0) dot.classList.add('active');
  dotsContainer.appendChild(dot);

  dot.addEventListener('click', () => {
    currentIndex = i;
    updateSlider();
  });
});

function updateSlider() {
  const slideWidth = slides[0].clientWidth + 20; // margin-right 20px
  slider.style.transform = `translateX(-${currentIndex * slideWidth}px)`;

  // Update active dot
  Array.from(dotsContainer.children).forEach((dot, i) => {
    dot.classList.toggle('active', i === currentIndex);
  });

  // Disable and dim buttons at edges
  if (currentIndex === 0) {
    prevBtn.disabled = true;
    prevBtn.style.opacity = "0.5";
    prevBtn.style.cursor = "not-allowed";
  } else {
    prevBtn.disabled = false;
    prevBtn.style.opacity = "1";
    prevBtn.style.cursor = "pointer";
  }

  if (currentIndex === slides.length - 1) {
    nextBtn.disabled = true;
    nextBtn.style.opacity = "0.5";
    nextBtn.style.cursor = "not-allowed";
  } else {
    nextBtn.disabled = false;
    nextBtn.style.opacity = "1";
    nextBtn.style.cursor = "pointer";
  }
}

// Next button
nextBtn.addEventListener('click', () => {
  if (currentIndex < slides.length - 1) {
    currentIndex++;
    updateSlider();
  }
});

// Previous button
prevBtn.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateSlider();
  }
});

// Initialize slider buttons
updateSlider();
