
const teamLogo = document.getElementById("teamLogo");
const teamName = document.getElementById("teamName");
const teamCode = document.getElementById("teamCode");
const teamCountry = document.getElementById("teamCountry");
const nationalTeam = document.getElementById("nationalTeam");
const teamIdElement = document.getElementById("teamId");
const updatedAt = document.getElementById("updatedAt");


const params =
  new URLSearchParams(window.location.search);

const teamId = params.get("id");

async function getTeam() {

  const response = await fetch(
    `http://localhost:3000/api/teams/${teamId}`
  );

  const data = await response.json();
  displayTeam(data.data);

//   console.log(data);

}

getTeam();




function displayTeam(team) {

  teamLogo.src = team.image_path;
  teamLogo.alt = team.name;

  teamName.textContent = team.name;

  teamCode.textContent =
    `Code: ${team.code || "N/A"}`;

  teamCountry.textContent =
    team.country?.name || "Unknown";

  nationalTeam.textContent =
    team.national_team
      ? "Yes"
      : "No";

  teamIdElement.textContent =
    team.id;

 updatedAt.textContent =
  new Date(team.updated_at)
    .toLocaleDateString(
      "en-US",
      {
        year: "numeric",
        month: "long",
        day: "numeric"
      }
    );updatedAt.textContent =
  new Date(team.updated_at)
    .toLocaleDateString(
      "en-US",
      {
        year: "numeric",
        month: "long",
        day: "numeric"
      }
    );

}