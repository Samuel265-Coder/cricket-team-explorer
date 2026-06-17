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

const teamIdElement =
  document.getElementById("teamId");

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

    console.log(data);

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

  teamIdElement.textContent =
    `Team ID: ${team.id}`;

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