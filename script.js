let index = 0;
const track = document.querySelector('.carousel-track');
const slides = document.querySelectorAll('.carousel-track img');

function updateCarousel() {
  track.style.transform = `translateX(-${index * 100}%)`;
}

function next() {
  index = (index + 1) % slides.length;
  updateCarousel();
}

function prev() {
  index = (index - 1 + slides.length) % slides.length;
  updateCarousel();
}