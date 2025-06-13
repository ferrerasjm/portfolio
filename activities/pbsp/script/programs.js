  document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll(".navbar-categories-link");
    const sections = document.querySelectorAll(".main-section");

    // Function to remove all active classes
    function clearActiveLinks() {
      links.forEach(link => link.classList.remove("active"));
    }

    // Create an observer to watch section visibility
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute("id");
            const activeLink = document.querySelector(`.navbar-categories-link[href="#${id}"]`);
            if (activeLink) {
              clearActiveLinks();
              activeLink.classList.add("active");
            }
          }
        });
      },
      {
        root: null, // viewport
        rootMargin: '0px',
        threshold: 0.6, // trigger when 60% of the section is visible
      }
    );

    // Observe each section
    sections.forEach(section => {
      observer.observe(section);
    });
  });