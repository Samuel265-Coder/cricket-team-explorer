const results = document.getElementById("results");
const searchInput = document.getElementById("searchInput");

let allTeams = [];

/*
|--------------------------------------------------------------------------
| Load teams automatically
|--------------------------------------------------------------------------
*/

document.addEventListener("DOMContentLoaded", () => {
  getTeams();
});

/*
|--------------------------------------------------------------------------
| Fetch teams from backend
|--------------------------------------------------------------------------
*/

async function getTeams() {

  try {

    results.innerHTML =
      '<p class="loading">Loading teams...</p>';

    const response = await fetch(
      "https://cricket-team-explorer-4.onrender.com/api/teams" ||"http://localhost:3000/api/teams"
    );

    const data = await response.json();

    // console.log(data);

    allTeams = data.data;

    displayTeams(allTeams);

  } catch (error) {

    // console.error(error);

    results.innerHTML = `
      <p class="empty">
        Failed to load teams.
      </p>
    `;
  }
}

/*
|--------------------------------------------------------------------------
| Search teams
|--------------------------------------------------------------------------
*/

searchInput.addEventListener("input", () => {

  const searchTerm =
    searchInput.value.toLowerCase();

  const filteredTeams =
    allTeams.filter(team =>
      team.name
        .toLowerCase()
        .includes(searchTerm)
    );

  displayTeams(filteredTeams);

});

/*
|--------------------------------------------------------------------------
| Display teams
|--------------------------------------------------------------------------
*/

function displayTeams(teams) {

  if (!teams.length) {

    results.innerHTML = `
      <p class="empty">
        No teams found.
      </p>
    `;

    return;
  }

  let html = "";

  teams.forEach(team => {

    html += `
       <a
         href="team.html?id=${team.id}"
         class="team-link"
       >
      <div class="team-card">

        <img
          src="${team.image_path}"
          alt="${team.name}"
        >

        <h2>${team.name}</h2>

        <p>
          <strong>Code:</strong>
          ${team.code || "N/A"}
        </p>

        <p>
          <strong>Country:</strong>
          ${team.country?.name || "Unknown"}
        </p>

        <p>
          <strong>National Team:</strong>
          ${team.national_team ? "Yes" : "No"}
        </p>

      </div>
      </a>
    `;
  });

  results.innerHTML = html;
}