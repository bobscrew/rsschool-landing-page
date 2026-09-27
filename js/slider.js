export function initSlider() {
  const track = document.querySelector("[data-slider-track]");
  const prevBtn = document.querySelector("[data-slider-prev]");
  const nextBtn = document.querySelector("[data-slider-next]");
  const dots = document.querySelectorAll("[data-slider-dots] .slider__dot");

  if (!track || !prevBtn || !nextBtn || dots.length === 0) return;

  const slides = track.querySelectorAll(".slide");
  const total = slides.length;

  let currentIndex = 0;

  function updateSlider() {
    track.style.transform = `translateX(-${currentIndex * 100}%)`;
    dots.forEach((dot, i) => {
      dot.classList.toggle("is-active", i === currentIndex);
    });
  }

  function goToSlide(index) {
    currentIndex = (index + total) % total;
    updateSlider();
  }

  function next() {
    goToSlide(currentIndex + 1);
  }

  function prev() {
    goToSlide(currentIndex - 1);
  }

  nextBtn.addEventListener("click", next);
  prevBtn.addEventListener("click", prev);

  dots.forEach((dot, i) => {
    dot.addEventListener("click", () => goToSlide(i));
  });

  updateSlider();
}