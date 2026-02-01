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
  const name = document.getElementById("searchInput").value.trim();

  fetch(`https://YOUR-REAL-API-URL.onrender.com/character/${name}`)
    .then(res => {
      if (!res.ok) throw new Error("Not found");
      return res.json();
    })
    .then(data => {
      document.getElementById("result").innerHTML = `
        <div class="result-card">
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
  "Luffy": "Captain of the Straw Hat Pirates. Dreams of becoming King of the Pirates.",
  "Zoro": "Master swordsman who wields three swords.",
  "Sanji": "Cook of the crew who fights with powerful kicks.",
  "Robin": "Archaeologist who can sprout limbs using Devil Fruit powers."
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
