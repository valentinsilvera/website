// parallax function and how to

document.addEventListener("mousemove", parallax);

function parallax(e) {
  this.querySelectorAll(".layer").forEach((layer) => {
    let speed = layer.getAttribute("data-speed");
    let x = (window.innerWidth - e.pageX * speed) / 100;
    let y = (window.innerWidth - e.pageY * speed) / 100;
    layer.style.transform = `
          translateX(${x}px)
          translateY(${y}px)`;
  });
}

/* Open the sidenav */
function openAbout() {
  document.getElementById("about-modal").style.width = "100%";
  document.body.style.position = "fixed";
  window.scrollTo(0, 3 * document.documentElement.clientHeight);
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeAbout() {
  document.getElementById("about-modal").style.width = "0%";
  document.body.style.position = "";
  document.body.style.top = "";
  window.scrollTo(0, 3 * document.documentElement.clientHeight);
}

// works modal

/* Open when someone clicks on the span element */
function openWorks() {
  document.getElementById("works-modal").style.width = "100%";
  document.body.style.position = "fixed";
  window.scrollTo(0, 3 * document.documentElement.clientHeight);
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeWorks() {
  document.getElementById("works-modal").style.width = "0%";
  document.body.style.position = "";
  document.body.style.top = "";
  window.scrollTo(0, 3 * document.documentElement.clientHeight);
}

// curve transition

let scroll = document.querySelector(".curve");
window.addEventListener("scroll", function () {
  let value = 1.5 + window.scrollY / -850;
  scroll.style.transform = `scaleY(${value})`;
});

// auto scroll down:

function bottom() {
  window.setTimeout(function () {
    smoothScroll(".middle-index", 800);
  }, 800);
}

bottom();

function smoothScroll(target, duration) {
  var target = document.querySelector(target);
  let targetPosition = target.getBoundingClientRect().top;
  let startPosition = window.pageYOffset;
  let distance = targetPosition - startPosition;
  let startTime = null;

  function animation(currentTime) {
    if (startTime === null) startTime = currentTime;
    let timeElapsed = currentTime - startTime;
    let run = ease(timeElapsed, startPosition, distance, duration);
    window.scrollTo(0, run);
    if (timeElapsed < duration) requestAnimationFrame(animation);
  }

  function ease(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  }

  requestAnimationFrame(animation);
}

// change the title in about for responsiveness

if (document.documentElement.clientWidth < 768)
  document.getElementById("main-background").textContent =
    "2 0 1 3 - - - - P R E - S E N T";

if (document.documentElement.clientWidth > 768)
  document.getElementById("main-background").textContent =
    "2 0 1 3 - - - P R E S E N T";

if (document.documentElement.clientWidth < 768)
  document.getElementById("footer-background").textContent =
    "D R O P M E - A L I N E";

if (document.documentElement.clientWidth > 768)
  document.getElementById("footer-background").textContent = "->GET IN TOUCH";
