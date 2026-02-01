async function searchCharacter() {
  const name = document.getElementById("searchInput").value;
  const res = await fetch(`/api/character/${name}`);
  const data = await res.json();
  const box = document.getElementById("resultBox");

  if (data.error) {
    box.innerHTML = "Character not found in database.";
  } else {
    box.innerHTML = `
      <h3>${data.name}</h3>
      <p><strong>Role:</strong> ${data.role}</p>
      <p><strong>Crew:</strong> ${data.crew}</p>
    `;
  }

  box.style.animation = "fadeIn 0.5s ease-in-out";
}
