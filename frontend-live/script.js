const revealItems = document.querySelectorAll(".section, .crew-card");

function revealOnScroll() {
  const windowHeight = window.innerHeight;
  revealItems.forEach(el => {
    const elementTop = el.getBoundingClientRect().top;
    if (elementTop < windowHeight - 80) {
      el.classList.add("visible");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);


// ================= SHOW CREW DETAILS MODAL =================
const characters = {
  Luffy: { desc: "Captain of the Straw Hat Pirates.", img: "images/luffy.png" },
  Zoro: { desc: "Master swordsman using three swords.", img: "images/zoro.png" },
  Nami: { desc: "Navigator who controls the weather.", img: "images/nami.png" },
  Usopp: { desc: "Sniper and brave warrior.", img: "images/usopp.png" },
  Sanji: { desc: "Cook who fights with kicks.", img: "images/sanji.png" },
  Chopper: { desc: "Doctor and reindeer.", img: "images/chopper.png" },
  Robin: { desc: "Archaeologist of the crew.", img: "images/robin.png" },
  Franky: { desc: "Cyborg shipwright.", img: "images/franky.png" },
  Brook: { desc: "Musician skeleton swordsman.", img: "images/brook.png" },
  Jinbe: { desc: "Helmsman and fish-man karate master.", img: "images/jinbe.png" }
};

function showDetails(name) {
  function closePopup() {
  document.getElementById("popup").style.display = "none";
}

  const data = characters[name];
  document.getElementById("popup").style.display = "flex";
  document.getElementById("charName").innerText = name;
  document.getElementById("charDesc").innerText = data.desc;
  document.getElementById("popupImg").src = data.img;

  function closePopup() {
  document.getElementById("popup").style.display = "none";
}

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
window.addEventListener("scroll", () => {
  const hero = document.querySelector(".hero");
  const scrollY = window.scrollY;
  hero.style.backgroundPositionY = scrollY * 0.3 + "px";
});

const themeBtn = document.getElementById("themeToggle");

themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");
  themeBtn.textContent = document.body.classList.contains("light-mode") ? "🌞" : "🌙";
});
