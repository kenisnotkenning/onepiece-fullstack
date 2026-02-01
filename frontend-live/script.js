// Reveal animation on scroll
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

// Character search (keep this if you already had search)
function searchCharacter() {
  const name = document.getElementById("searchInput").value.trim().toLowerCase();

  fetch(`https://onepiece-api-ken.onrender.com/character/${name}`)
    .then(res => {
      if (!res.ok) throw new Error("Not found");
      return res.json();
    })
    .then(data => {
  document.getElementById("result").innerHTML = `
    <div class="result-card">
      <img src="${data.image}" alt="${data.name}" class="result-img">
      <h3>${data.name}</h3>
      <p>Role: ${data.role}</p>
      <p>Crew: ${data.crew}</p>
    </div>
  `;
})

    .catch(() => {
      document.getElementById("result").innerHTML = "<p>Character not found</p>";
    });
}




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
const crewInfo = {
  Luffy: "Captain of the Straw Hat Pirates. Ate the Gum-Gum Fruit.",
  Zoro: "Master swordsman using the Three-Sword Style.",
  Nami: "Navigator who can predict weather and loves treasure.",
  Usopp: "Sniper and storyteller with incredible aim.",
  Sanji: "Chef of the crew who fights with powerful kicks.",
  Chopper: "Doctor of the crew, a reindeer who ate the Human-Human Fruit.",
  Robin: "Archaeologist who can sprout limbs using Devil Fruit powers.",
  Franky: "Shipwright and cyborg who built the Thousand Sunny.",
  Brook: "Musician and swordsman who came back from the dead.",
  Jinbe: "Helmsman and master of Fish-Man Karate."
};


document.querySelectorAll(".crew-card").forEach(card => {
  card.addEventListener("click", () => {
    const name = card.querySelector("p").textContent.trim();
    document.getElementById("modalName").textContent = name;
    document.getElementById("modalDesc").textContent = crewInfo[name] || "Straw Hat Pirate";
    document.getElementById("characterModal").style.display = "block";
  });
});

function closeModal() {
  document.getElementById("characterModal").style.display = "none";
}
let currentSlide = 0;
const slides = document.querySelectorAll(".slide");

function changeSlide() {
  slides[currentSlide].classList.remove("active");
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add("active");
}

setInterval(changeSlide, 4000);
body::before {
  content: "";
  position: fixed;
  top: 0;
  left: 0;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle at 20% 30%, rgba(255,255,255,0.08), transparent 40%),
              radial-gradient(circle at 80% 70%, rgba(255,255,255,0.05), transparent 40%);
  animation: moveBg 20s linear infinite;
  z-index: -2;
}

@keyframes moveBg {
  from { transform: translate(0, 0); }
  to { transform: translate(-25%, -25%); }
}
