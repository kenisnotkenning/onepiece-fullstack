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



// ================= CREW CHARACTER INFO =================
const crewInfo = {
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

// ================= SHOW CREW DETAILS MODAL =================
function showDetails(name) {
  document.getElementById("modalName").textContent = name;
  document.getElementById("modalDesc").textContent = crewInfo[name];
  document.getElementById("characterModal").style.display = "block";
}

function closeModal() {
  document.getElementById("characterModal").style.display = "none";
}

// ================= SEARCH FUNCTION (BACKEND API) =================
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

// ================= HERO IMAGE SLIDER =================
let currentSlide = 0;
const slides = document.querySelectorAll(".slide");

function changeSlide() {
  if (slides.length === 0) return;
  slides[currentSlide].classList.remove("active");
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add("active");
}

setInterval(changeSlide, 4000);

// ================= SCROLL REVEAL ANIMATION =================
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
