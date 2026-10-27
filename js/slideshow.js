// Home page photo slideshow: crossfades every few seconds and pauses while
// someone hovers or uses the arrows. Arrows, arrow keys, or a tap on the photo move through it.
// Only the first photo loads with the page; each later one (data-src) loads a slide ahead.
document.querySelectorAll("[data-slideshow]").forEach((show) => {
  const slides = [...show.querySelectorAll(".slideshow__slide")];
  const controls = show.querySelector(".slideshow__controls");
  const count = show.querySelector(".slideshow__count");
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const delay = 5000;
  const pausedBy = new Set();
  let current = 0;
  let timer;

  function load(index) {
    const slide = slides[(index + slides.length) % slides.length];
    if (slide.dataset.src) {
      slide.src = slide.dataset.src;
      delete slide.dataset.src;
    }
  }

  function go(index) {
    slides[current].classList.remove("is-active");
    current = (index + slides.length) % slides.length;
    load(current);
    load(current + 1);
    load(current - 1);
    slides[current].classList.add("is-active");
    count.textContent = `${current + 1} / ${slides.length}`;
  }

  // Auto-advance only while nothing is pausing it (hover or keyboard focus)
  function restart() {
    clearInterval(timer);
    if (!reduceMotion && pausedBy.size === 0) timer = setInterval(() => go(current + 1), delay);
  }

  function pause(reason) {
    pausedBy.add(reason);
    restart();
  }

  function resume(reason) {
    pausedBy.delete(reason);
    restart();
  }

  show.querySelectorAll(".slideshow__arrow").forEach((arrow) =>
    arrow.addEventListener("click", () => {
      go(current + Number(arrow.dataset.step));
      restart();
    })
  );
  show.querySelector(".slideshow__frame").addEventListener("click", () => {
    go(current + 1);
    restart();
  });
  show.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft") go(current - 1);
    if (event.key === "ArrowRight") go(current + 1);
  });
  show.addEventListener("mouseenter", () => pause("hover"));
  show.addEventListener("mouseleave", () => resume("hover"));
  show.addEventListener("focusin", () => pause("focus"));
  show.addEventListener("focusout", (event) => {
    if (!show.contains(event.relatedTarget)) resume("focus");
  });

  controls.hidden = false;
  go(0);
  restart();
});
