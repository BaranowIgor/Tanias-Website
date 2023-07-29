const primaryHeader = document.querySelector(".primary-header");
const navToggle = document.querySelector(".mobile-nav-toggle");
const primaryNav = document.querySelector(".primary-navigation");

navToggle.addEventListener("click", () => {
  primaryNav.hasAttribute("data-visible")
  ? navToggle.setAttribute("aria-expanded", false)
  : navToggle.setAttribute("aria-expanded", true)
  primaryNav.classList.toggle("opened");
  primaryHeader.toggleAttribute("data-overlay");
  navToggle.classList.toggle("opened");
});


//Add an event listener to the links inside primary-navigation to get rid of this navigation after clicking a link 
const navLinks = primaryNav.querySelectorAll("a");
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    primaryNav.classList.remove("opened");
    primaryHeader.removeAttribute("data-overlay");
    navToggle.classList.remove("opened");
    navToggle.setAttribute("aria-expanded", false);
  });
});


document.addEventListener("click", (event) => {
  const target = event.target;
  if (!target.closest(".primary-navigation") && !target.closest(".mobile-nav-toggle")) {
    primaryNav.classList.remove("opened");
    primaryHeader.removeAttribute("data-overlay");
    navToggle.classList.remove("opened");
    navToggle.setAttribute("aria-expanded", false);
  }
});


  


// Counter animation with Intersection Observer instance API (detect when an element enters viewport and active the aounter animation)
const counters = document.querySelectorAll(".counter");
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    // Check if the counter is in the viewport
    if (entry.isIntersecting) {
      const counter = entry.target;
      counter.innerText = "0";

      const updateCounter = () => {
        const target = +counter.getAttribute("data-target");
        const currentCount = +counter.innerText;

        const increment = target / 250;

        if (currentCount < target) {
          counter.innerText = Math.ceil(currentCount + increment);
          setTimeout(updateCounter, 1);
        } else {
          counter.innerText = target;
        }
      };

      updateCounter();

      // Stop observing the counter once it has been animated
      observer.unobserve(counter);
    }
  });
});

// Observe each counter element
counters.forEach((counter) => {
  observer.observe(counter);
});






const accordions = document.querySelectorAll(".accordion-item");

accordions.forEach((accordion) => {
  const header = accordion.querySelector(".accordion-item-header");

  header.addEventListener("click", function () {
    accordion.classList.toggle("active");
  });
});

const innerAccordions = document.querySelectorAll(".accordion-inner-item");

innerAccordions.forEach((innerAccordion) => {
  const innerHeader = innerAccordion.querySelector(".accordion-inner-item-header");

  innerHeader.addEventListener("click", function (event) {
    event.stopPropagation(); // Prevents event bubbling to parent accordions
    innerAccordion.classList.toggle("active");
  });
});



//-------------portfolio scroller --------------//
$(document).ready(function(){
  $('.project-slider').slick({
    autoplay: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  });
});