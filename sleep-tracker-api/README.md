# Sleep Tracker API

The Sleep Tracker API provides endpoints for managing sleep tracking data for users.

## Prerequisites

Before you begin, ensure you have the following installed on your machine:

- Node.js: [Install Node.js](https://nodejs.org/)
- Docker: [Install Docker](https://docs.docker.com/get-docker/)
- Docker Compose: [Install Docker Compose](https://docs.docker.com/compose/install/)

## Database Model

The API uses a PostgreSQL database with the following model:

```sql
CREATE TABLE User (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    gender VARCHAR(10) NOT NULL
);

CREATE TABLE SleepRecord (
    id SERIAL PRIMARY KEY,
    user_id INT REFERENCES User(id) ON DELETE CASCADE,
    sleep_duration INT NOT NULL,
    record_date DATE NOT NULL
);
```

- **User**: Represents a user of the Sleep Tracker application. Each user has a unique ID, name, and gender.
- **SleepRecord**: Represents a single sleep tracking record associated with a user. Each record includes the sleep duration and date of the record.

## API Endpoints

The Sleep Tracker API provides the following endpoints:

- **POST /users**: Create a new user.
- **GET /users**: Retrieve a list of all users.
- **GET /users/:userId/history**: Get the sleep records for a specific user.
- **GET /users/sleep-records**: Get all users along with the number of sleep records for each user.
- **POST /sleep-records**: Create a new sleep record.

For more details on each endpoint, refer to the API documentation or the source code.

## Getting Started

To get started with the Sleep Tracker API:

1. Install dependencies:

```bash
yarn install
```

2. Run the database:

```bash
docker-compose up -d
```

3. Run the API server:

```bash
yarn start
```

The API should now be running locally. You can access it at `http://localhost:3000`.
