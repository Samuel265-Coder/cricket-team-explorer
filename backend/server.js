require("dotenv").config();

const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();

app.use(cors());

const cricketInstance = axios.create({
  baseURL:"https://cricket.sportmonks.com/api/v2.0/teams",
});

app.get("/api/teams", async (req, res) => {

  try {

    const response = await cricketInstance.get(
      {
        params: {
          api_token: process.env.SPORTMONKS_TOKEN,
          include: "country"
        }
      }
    );

    res.json(response.data);

  } catch (error) {

    // console.error(error.message);

    res.status(500).json({
      error: "Failed to fetch teams"
    });

  }

});


app.get("/api/teams/:id", async (req, res) => {

  try {

    const teamId = req.params.id;

    const response = await cricketInstance.get(
      `/${teamId}`,
      {
        params: {
          api_token: process.env.SPORTMONKS_TOKEN,
          include: "country"
        }
      }
    );

    res.json(response.data);

  } catch (error) {

    console.error(error.message);

    res.status(500).json({
      error: "Failed to fetch team"
    });

  }

});

app.get("/", (req, res) => {
  res.send("Backend is working!");
});

app.listen(process.env.PORT, () => {
  console.log(
    `Server running on port ${process.env.PORT}`
  );
});