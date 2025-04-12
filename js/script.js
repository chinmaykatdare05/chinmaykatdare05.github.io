(function () {
  const navBtns = document.querySelectorAll('.control');
  const sections = document.querySelectorAll('section');

  // Smooth scroll on nav click
  navBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.getElementById(btn.dataset.id);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Handle scroll syncing
  window.addEventListener('scroll', () => {
    let currentSectionId = '';

    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();

      // When section top is at or above 25% of viewport height, and bottom is below it
      if (
        rect.top <= window.innerHeight * 0.25 &&
        rect.bottom > window.innerHeight * 0.25
      ) {
        currentSectionId = section.id;
      }
    });

    // Handle edge case: when scrolled all the way to top
    if (window.scrollY === 0) {
      currentSectionId = 'home';
    }

    // Set active button
    navBtns.forEach((btn) => {
      btn.classList.toggle('active-btn', btn.dataset.id === currentSectionId);
    });
  });

  // Theme toggle
  document.querySelector('.theme-btn').addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
  });
})();
