const observerOptions = {
  threshold: 0.5,
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const progressBars = entry.target.querySelectorAll(".skill-progress");
      progressBars.forEach((bar) => {
        const progress = bar.getAttribute("data-progress");
        bar.style.width = progress + "%";
      });
    }
  });
}, observerOptions);

const skillsSection = document.querySelector(".skills");
if (skillsSection) {
  observer.observe(skillsSection);
}   