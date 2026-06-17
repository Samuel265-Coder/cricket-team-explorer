const teamLogo =
  document.getElementById("teamLogo");

const teamName =
  document.getElementById("teamName");

const teamCode =
  document.getElementById("teamCode");

const teamCountry =
  document.getElementById("teamCountry");

const nationalTeam =
  document.getElementById("nationalTeam");



const updatedAt =
  document.getElementById("updatedAt");

const API_URL =
  "https://cricket-team-explorer-4.onrender.com";

/*
|--------------------------------------------------------------------------
| Get team ID from URL
|--------------------------------------------------------------------------
*/

const params =
  new URLSearchParams(
    window.location.search
  );

const teamId = params.get("id");
const seasonId = 10;

/*
|--------------------------------------------------------------------------
| Fetch single team
|--------------------------------------------------------------------------
*/

async function getTeam() {
  try {
    const response = await fetch(
      `${API_URL}/api/teams/${teamId}`
    );

    const data = await response.json();

    console.log(data.data);

    displayTeam(data.data);
  } catch (error) {
    console.error(error);
  }
}

getTeam();


/*
|--------------------------------------------------------------------------
| Display team
|--------------------------------------------------------------------------
*/

function displayTeam(team) {
  teamLogo.src = team.image_path;
  teamLogo.alt = team.name;

  teamName.textContent =
    team.name;

  teamCode.textContent =
    `Code: ${team.code || "N/A"}`;

  teamCountry.textContent =
    `Country: ${
      team.country?.name || "Unknown"
    }`;

  nationalTeam.textContent =
    `National Team: ${
      team.national_team
        ? "Yes"
        : "No"
    }`;

  updatedAt.textContent =
    new Date(team.updated_at)
      .toLocaleDateString(
        "en-US",
        {
          year: "numeric",
          month: "long",
          day: "numeric",
        }
      );
}




/*
|--------------------------------------------------------------------------
| feature team squad
|--------------------------------------------------------------------------
*/


async function getPlayers() {

  const response = await fetch(
    `${API_URL}/api/teams/${teamId}/squad/${seasonId}`
  );

  const data = await response.json();

  console.log(data.data.squad);

  displayPlayers(data.data.squad);
}

getPlayers();



/*
|--------------------------------------------------------------------------
| display team squad
|--------------------------------------------------------------------------
*/

function displayPlayers(players) {

  const container = document.getElementById("playersContainer");

  container.innerHTML = "";

  players.forEach(player => {

    container.innerHTML += `
      <div class="player-card">

        <img src="${player.image_path}" alt="${player.fullname}">

        <h3>${player.fullname}</h3>

        <p>${player.position?.name || "Player"}</p>

      </div>
    `;

  });

}