# 🏏 Cricket Team Explorer

A simple web application that allows users to explore cricket teams using the SportMonks Cricket API.

The application automatically loads cricket teams when the page opens and allows users to search and filter teams instantly.

## Features

- View cricket teams from SportMonks API
- Search teams by name
- Responsive card-based layout
- Team logo display
- Team country information
- Team code display
- National team indicator
- Express.js backend for API security
- Environment variable support using dotenv

## Technologies Used

### Frontend

- HTML5
- CSS3
- JavaScript (ES6+)

### Backend

- Node.js
- Express.js
- Axios
- CORS
- Dotenv

### API

- SportMonks Cricket API

## Project Structure

```text
cricket-team-explorer/
│
├── frontend/
│   ├── index.html
│   ├── style.css
│   └── app.js
│
├── backend/
│   ├── server.js
│   ├── package.json
│   └── .env
│
└── README.md
```

## Installation

### 1. Clone the repository

```bash
git clone https://github.com/Samuel265-Coder/cricket-team-explorer.git
```

### 2. Navigate to the backend folder

```bash
cd cricket-team-explorer/backend
```

### 3. Install dependencies

```bash
npm install
```

### 4. Create a .env file

```env
SPORTMONKS_TOKEN=your_api_token
PORT=3000
```

### 5. Start the backend server

```bash
node server.js
```

Expected output:

```bash
Server running on port 3000
```

### 6. Open the frontend

Open the `index.html` file in your browser or use a local development server.

## API Endpoint

The frontend communicates with the Express backend:

```http
GET http://localhost:3000/api/teams
```

The backend securely requests data from the SportMonks API and returns it to the frontend.

## Learning Objectives

This project was built to practice:

- API consumption
- Asynchronous JavaScript
- Fetch API
- Express.js
- Backend integration
- Environment variables
- DOM manipulation
- Search and filtering
- Responsive web design

## Future Improvements

- Team details page
- Country filtering
- Pagination
- Fixtures and match schedules
- Team statistics
- Dark mode
- Loading skeletons
- Deployment

## Author

Samuel Gondwe

---

Built while learning modern web development and API integration.