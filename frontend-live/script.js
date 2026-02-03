// ================= REVEAL ON SCROLL =================
const revealElements = document.querySelectorAll(".section, .crew-card");

function revealOnScroll() {
  const windowHeight = window.innerHeight;
  revealElements.forEach(el => {
    const elementTop = el.getBoundingClientRect().top;
    if (elementTop < windowHeight - 100) {
      el.classList.add("visible");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);


// ================= NAVBAR SCROLL EFFECT =================
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.style.background = "rgba(0,0,0,0.95)";
    navbar.style.boxShadow = "0 2px 10px rgba(0,0,0,0.6)";
  } else {
    navbar.style.background = "rgba(0,0,0,0.8)";
    navbar.style.boxShadow = "none";
  }
});


// ================= PARTICLES BACKGROUND =================
const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

for (let i = 0; i < 80; i++) {
  particles.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    radius: Math.random() * 2,
    dx: (Math.random() - 0.5) * 0.5,
    dy: (Math.random() - 0.5) * 0.5
  });
}

function animateParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "rgba(255,255,255,0.5)";

  particles.forEach(p => {
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
    ctx.fill();

    p.x += p.dx;
    p.y += p.dy;

    if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
    if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
  });

  requestAnimationFrame(animateParticles);
}

animateParticles();


// ================= CHARACTER DESCRIPTIONS =================
const characters = {
  Luffy: "Captain of the Straw Hat Pirates. Dreams of becoming King of the Pirates.",
  Zoro: "Master swordsman who uses three swords.",
  Nami: "Navigator who can predict the weather.",
  Usopp: "Sniper of the crew and master storyteller.",
  Sanji: "Cook who fights using powerful kicks.",
  Chopper: "Doctor who can transform using Rumble Balls.",
  Robin: "Archaeologist who can sprout limbs.",
  Franky: "Shipwright and cyborg with heavy weapons.",
  Brook: "Musician and swordsman brought back to life.",
  Jinbe: "Helmsman and powerful fish-man karate master."
};


// ================= CLICK CHARACTER =================
function showDetails(name) {
  alert(name + ": " + characters[name]);
}


// ================= SEARCH CHARACTER =================
function searchCharacter() {
  const input = document.getElementById("searchInput").value.trim();
  if (characters[input]) {
    alert(input + ": " + characters[input]);
  } else {
    alert("Character not found");
  }
}


// ================= HERO SLIDER =================
let currentSlide = 0;
const slides = document.querySelectorAll(".slide");

function changeSlide() {
  if (slides.length === 0) return;
  slides[currentSlide].classList.remove("active");
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add("active");
}

setInterval(changeSlide, 4000);
