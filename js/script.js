const images = document.querySelectorAll("img[data-src]");

function loadImage(image) {
  image.src = image.dataset.src;

  observer.unobserve(image);
}

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        loadImage(entry.target);
      }
    });
  },
  {
    rootMargin: "50px",
    threshold: 0.1,
  }
);

images.forEach((image) => {
  observer.observe(image);
});
