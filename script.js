document.addEventListener("DOMContentLoaded", function () {

  document.querySelectorAll(".stack-carousel").forEach(function(carousel) {

    const slides = carousel.querySelectorAll(".slide");
    const nextBtn = carousel.querySelector(".next");
    const prevBtn = carousel.querySelector(".prev");

    // 🔥 Protección anti-error
    if (!slides.length || !nextBtn || !prevBtn) return;

    let current = 0;

    function updateSlides() {
      slides.forEach(slide => {
        slide.classList.remove("active", "prev", "next");
      });

      slides[current].classList.add("active");

      let prevIndex = (current - 1 + slides.length) % slides.length;
      let nextIndex = (current + 1) % slides.length;

      slides[prevIndex].classList.add("prev");
      slides[nextIndex].classList.add("next");
    }

    nextBtn.addEventListener("click", () => {
      current = (current + 1) % slides.length;
      updateSlides();
    });

    prevBtn.addEventListener("click", () => {
      current = (current - 1 + slides.length) % slides.length;
      updateSlides();
    });

    // Swipe celular
    let startX = 0;
    let endX = 0;

    carousel.addEventListener("touchstart", function(e) {
      startX = e.touches[0].clientX;
    });

    carousel.addEventListener("touchmove", function(e) {
      endX = e.touches[0].clientX;
    });

    carousel.addEventListener("touchend", function() {
      let diff = startX - endX;

      if (diff > 50) {
        current = (current + 1) % slides.length;
        updateSlides();
      } 
      else if (diff < -50) {
        current = (current - 1 + slides.length) % slides.length;
        updateSlides();
      }
    });

    updateSlides();

  });

});

// Navbar scroll
window.addEventListener("scroll", function() {
  const nav = document.querySelector(".navbar");
  if(window.scrollY > 50){
    nav.style.background = "rgba(0,0,0,0.85)";
  } else {
    nav.style.background = "rgba(0,0,0,0.4)";
  }
});
// FILTRO PORTFOLIO
document.querySelectorAll(".filter-btn").forEach(button => {

  button.addEventListener("click", () => {

    const portfolio = document.querySelector(".portfolio");
    const navbar = document.querySelector(".navbar");
    const title = document.querySelector(".section-title");
    const currentActive = document.querySelector(".portfolio-category.active");

    const filter = button.getAttribute("data-filter");

    const nextCategory = document.querySelector(
      `.portfolio-category[data-category="${filter}"]`
    );

    if (!nextCategory || currentActive === nextCategory) return;

    /* ======================
       BOTONES
    ====================== */

    document.querySelectorAll(".filter-btn")
      .forEach(btn => {
        btn.classList.remove(
          "active",
          "concierto-active",
          "sesiones-active",
          "gastronomia-active"
        );
      });

    button.classList.add("active");

    if (filter === "concierto") {
      button.classList.add("concierto-active");
    }

    if (filter === "sesiones") {
      button.classList.add("sesiones-active");
    }

    if (filter === "gastronomia") {
      button.classList.add("gastronomia-active");
    }

    /* ======================
       TÍTULO
    ====================== */

    title.classList.remove(
      "title-concierto",
      "title-sesiones",
      "title-gastronomia"
    );

    title.classList.add(`title-${filter}`);

    /* ======================
       NAVBAR
    ====================== */

    navbar.classList.remove(
      "nav-concierto",
      "nav-sesiones",
      "nav-gastronomia"
    );

    navbar.classList.add(`nav-${filter}`);

    /* ======================
       CAMBIO PORTFOLIO
    ====================== */

    currentActive.classList.remove("active");

    setTimeout(() => {
      nextCategory.classList.add("active");
    }, 300);

    /* ======================
       CAMBIO EXPERIENCIAS
    ====================== */

    const currentExp = document.querySelector(".experiencias-category.active");

    const nextExp = document.querySelector(
      `.experiencias-category[data-exp="${filter}"]`
    );

    if (currentExp && nextExp && currentExp !== nextExp) {
      currentExp.classList.remove("active");

      setTimeout(() => {
        nextExp.classList.add("active");
      }, 300);
    }
    window.addEventListener("scroll", function() {
      const nav = document.querySelector(".navbar");
      nav.classList.toggle("scrolled", window.scrollY > 50);
    });
  });
  const reveals = document.querySelectorAll(".reveal");

  window.addEventListener("scroll", () => {

    reveals.forEach(el => {
      const windowHeight = window.innerHeight;
      const elementTop = el.getBoundingClientRect().top;
  
      if (elementTop < windowHeight - 100) {
        el.classList.add("active");
      }
    });
  
    const hero = document.querySelector(".hero-img");
    const scroll = window.scrollY;
  
    if(hero){
      hero.style.transform = `translateY(${scroll * 0.3}px)`;
    }
  
  });
  window.addEventListener("scroll", () => {
    const hero = document.querySelector(".hero-img");
    const scroll = window.scrollY;
  
    hero.style.transform = `translateY(${scroll * 0.3}px)`;
  });
});  

