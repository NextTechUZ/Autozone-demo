window.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("scroll", () => {
    let reveals = document.querySelectorAll(".reveal");
    let windowHeight = window.innerHeight;

    for (let i = 0; i < reveals.length; i++) {
      let revealTop = reveals[i].getBoundingClientRect().top;
      let revealBottom = reveals[i].getBoundingClientRect().bottom;
      let revealPoint = 50;

      if (revealTop < windowHeight - revealPoint && revealBottom >= 0) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  });
});
