# Sports Events

**Sport Event Listing** is a web application designed to keep sports fans informed about upcoming football events.

## Key Features

- **Event List:** The application provides a comprehensive list of sports events, sorted by sport type, geographic location, date, and other relevant filters.
- **Event Details:** Each event comes with detailed information such as date, time, venue, registration cost, rules, and logistical details.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Contributions](#contributions)
- [License](#license)

## Installation

Make sure you have [Node.js](https://nodejs.org/) installed on your machine. Also, create a RapidAPI account and generate API keys and host: [RapidAPI - Livescore Sports](https://rapidapi.com/tipsters/api/livescore-sports/). Additionally, create a Google Console account for the OAuth system.

1. Clone this repository:

   ```bash
   git clone git@github.com:Bitsmith01/sport-event-list.git


2. Install dependencies:
```bash
   npm install

3. Create a .env file:
mkdir .env 

4. Fill it like this:
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=

NEXT_PUBLIC_API_KEY=
NEXT_PUBLIC_API_HOST=

NEXTAUTH_URL=https://localhost:3000
NEXTAUTH_SECRET=

3. run the project 

```bash
   npm run dev