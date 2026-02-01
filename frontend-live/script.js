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
  const name = document.getElementById("searchInput").value;
  fetch(`https://your-python-api.onrender.com/character/${name}`)
    .then(res => res.json())
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
