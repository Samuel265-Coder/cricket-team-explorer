require("dotenv").config();

const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();

app.use(cors());

const cricketInstance = axios.create({
  baseURL: "https://cricket.sportmonks.com/api/v2.0",
});

/*
|--------------------------------------------------------------------------
| Get all teams
|--------------------------------------------------------------------------
*/

app.get("/api/teams", async (req, res) => {
  try {
    const response = await cricketInstance.get("/teams", {
      params: {
        api_token: process.env.SPORTMONKS_TOKEN,
        include: "country",
      },
    });

    res.json(response.data);
  } catch (error) {
    console.error(error.message);

    res.status(500).json({
      error: "Failed to fetch teams",
    });
  }
});

/*
|--------------------------------------------------------------------------
| Get single team
|--------------------------------------------------------------------------
*/

app.get("/api/teams/:id", async (req, res) => {
  try {
    const teamId = req.params.id;

    const response = await cricketInstance.get(
      `/teams/${teamId}`,
      {
        params: {
          api_token: process.env.SPORTMONKS_TOKEN,
          include: "country",
        },
      }
    );

    res.json(response.data);
  } catch (error) {
    console.error(error.message);

    res.status(500).json({
      error: "Failed to fetch team",
    });
  }
});



/*
|--------------------------------------------------------------------------
| Get team squad (players)
|--------------------------------------------------------------------------
*/

app.get("/api/teams/:id/squad/:seasonId", async (req, res) => {
  try {

    const { id, seasonId } = req.params;

    const response = await cricketInstance.get(
      `/teams/${id}/squad/${seasonId}`,
      {
        params: {
          api_token: process.env.SPORTMONKS_TOKEN
        }
      }
    );

    res.json(response.data);

  } catch (error) {

    console.error(
      error.response?.data || error.message
    );

    res.status(500).json({
      error: "Failed to fetch squad"
    });

  }
});/*
|--------------------------------------------------------------------------
| Get team squad (players)
|--------------------------------------------------------------------------
*/

app.get("/api/teams/:id/squad/:seasonId", async (req, res) => {
  try {

    const { id, seasonId } = req.params;

    const response = await cricketInstance.get(
      `/teams/${id}/squad/${seasonId}`,
      {
        params: {
          api_token: process.env.SPORTMONKS_TOKEN
        }
      }
    );

    res.json(response.data);

  } catch (error) {

    console.error(
      error.response?.data || error.message
    );

    res.status(500).json({
      error: "Failed to fetch squad"
    });

  }
});/*
|--------------------------------------------------------------------------
| Get team squad (players)
|--------------------------------------------------------------------------
*/

app.get("/api/teams/:id/squad/:seasonId", async (req, res) => {
  try {

    const { id } = req.params;

    let seasonId = req.params.seasonId || 10;

    const response = await cricketInstance.get(
      `/teams/${id}/squad/${seasonId}`,
      {
        params: {
          api_token: process.env.SPORTMONKS_TOKEN
        }
      }
    );

    res.json(response.data);

  } catch (error) {

    console.error(
      error.response?.data || error.message
    );

    res.status(500).json({
      error: "Failed to fetch squad"
    });

  }
});
/*
|--------------------------------------------------------------------------
| Root route
|--------------------------------------------------------------------------
*/

app.get("/", (req, res) => {
  res.send("Backend is working!");
});

/*
|--------------------------------------------------------------------------
| Start server
|--------------------------------------------------------------------------
*/

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});