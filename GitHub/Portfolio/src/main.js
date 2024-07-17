document.addEventListener("DOMContentLoaded", function (event) {
  event.preventDefault();

  var setVanta = (elementClass) => {
    if (window.VANTA)
      window.VANTA.TOPOLOGY({
        el: elementClass,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.0,
        minWidth: 200.0,
        scale: 1.0,
        scaleMobile: 1.0,
        color: 0x6b21a8,
        backgroundColor: 0x020617,
      });

    var typed = new Typed(".text-type", {
      strings: ["Prasanth"],
      typeSpeed: 200,
      loop: true,
      backDelay: 5000,
    });
  };

  setVanta(".try");

  const projectCards = document.querySelectorAll(".paper");

  // Intersection Observer options
  const options = {
    threshold: 0.5, // Trigger when 50% of the element is visible
  };

  // Callback function to handle the intersection changes
  const callback = (entries, observer) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add("reveal");
        }, index * 800); // Apply delay based on the index
      } else {
        entry.target.classList.remove("reveal");
      }
    });
  };

  // Create a new Intersection Observer for project cards
  const observer = new IntersectionObserver(callback, options);

  // Observe each project card
  projectCards.forEach((card) => {
    observer.observe(card);
  });

  const certifications = document.querySelectorAll(".certification");

  const observer1 = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        } else {
          entry.target.classList.remove("visible");
        }
      });
    },
    {
      threshold: 0.5, // Adjust as needed
    }
  );

  certifications.forEach((certification) => {
    observer1.observe(certification);
  });
});
