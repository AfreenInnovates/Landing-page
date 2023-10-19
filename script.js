// Add the "animate-details" class when the element is in the viewport
function checkScroll() {
  const elements = document.querySelectorAll(".content-right");
  elements.forEach((element) => {
    const rect = element.getBoundingClientRect();
    const windowHeight =
      window.innerHeight || document.documentElement.clientHeight;

    if (rect.top <= windowHeight * 0.7) {
      element.classList.add("animate-details");
    }
  });
}

// Listen for scroll events and check if elements are in the viewport
window.addEventListener("scroll", checkScroll);
window.addEventListener("load", checkScroll); // Check on page load

// Optionally, you can debounce the scroll event for better performance

let cursor = document.querySelector("#cursor");
let cursorBackground = document.querySelector("#cursor-blur");

document.addEventListener("mousemove", function (e) {
  gsap.to(cursor, {
    x: event.clientX,
    y: event.clientY,
    duration: 1.2, // Adjust the duration as needed for the desired speed
  });
});
document.addEventListener("mousemove", function (e) {
  gsap.to(cursorBackground, {
    x: e.clientX,
    y: e.clientY,
    duration: 1,
  });
});
