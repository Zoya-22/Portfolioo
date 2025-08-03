 // Smooth scroll for navbar links
    document.querySelectorAll('.navbar a').forEach((anchor) => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const sectionId = this.getAttribute('href');
        document.querySelector(sectionId).scrollIntoView({
          behavior: 'smooth',
        });
      });
    });

    // Fade-in and slide-up animation on scroll
    const elements = document.querySelectorAll(
      '.section, .project-card, .about-card, .skill-card'
    );
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = 'translateY(0)';
          }
        });
      },
      {
        threshold: 0.2,
      }
    );

    elements.forEach((element) => {
      element.style.opacity = 0;
      element.style.transform = 'translateY(30px)';
      element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      observer.observe(element);
    });