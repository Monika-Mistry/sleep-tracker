# Sleep Tracker Web Application

This web application allows users to track their sleep duration over time. It includes a form for users to input their name, gender, and sleep time duration, and displays this data in a table. Additionally, users can view their sleep data for the last 7 days using a bar chart.

## Requirements

1. **Form Page**:

   - Contains a form where users can input their name, gender, and sleep time duration.
   - Submits the form data to the backend, where it is stored in a database with the current date.

2. **Data Page**:

   - Displays a table with user information, including name, gender, and the number of submissions per person.
   - Displays a bar chart showing a user's sleep duration for the last 7 days when a row in the table is selected.

3. **Technologies**:
   - Frontend: React with TypeScript, Material-UI and Apache ECharts.
   - Backend: Node.js with TypeScript, Express.js, and PostgreSQL.

## How to Run the Application

Follow these steps to run the Sleep Tracker Web Application:

1. **Clone the Repository**

2. **Install Dependencies**:

```bash
# Navigate to the project directory:
  cd sleep-tracker

# Install frontend dependencies:
  cd sleep-tracker-ui
  yarn install

#Install backend dependencies:
  cd sleep-tracker-api
  yarn install
```

3. **Set Up the Database**:

- Create a PostgreSQL database for the application.

```bash
# Start the database
cd sleep-tracker-api
docker-compose up -d
```

4. **Start the Application**:

```bash
# Navigate to the project directory:
  cd sleep-tracker

#  Start the backend server:
  cd sleep-tracker-api
  yarn start

# Start the frontend development server:
  cd sleep-tracker-ui
  yarn start
```

5. **Access the Application**:

- The application should now be running locally. Open your web browser and navigate to `http://localhost:5173` to access it.
- The API will be available on `http://localhost:3000`

## Potential next steps and features

1. **Implement Authentication**:

   - Allow users to register an account and log in securely to track their sleep data.
   - Implement password hashing and encryption for user authentication to ensure data security.
   - Include functionality for users to reset their passwords if forgotten.
   - Determine whether users should be able to view other users' sleep data and implement access controls accordingly.

2. **Progressive Web App (PWA) Functionality**:

   - Implement service workers and a manifest file to enable offline functionality and installability on mobile devices.
   - Ensure responsiveness and mobile-friendly design to provide a seamless user experience across various devices and screen sizes.
   - Add support for push notifications to notify users of important updates or reminders related to their sleep tracking.

3. **Additional Testing**:

   - Conduct integration testing to ensure that all components of the application work together smoothly, including authentication, data retrieval, and visualisation.
   - Conduct penetration testing (pen testing) to identify and address potential security vulnerabilities, especially related to authentication and data protection.
   - Implement automated testing for continuous integration and deployment pipelines to maintain code quality and reliability.

4. **Containerisation with Docker**:

   - Dockerise the application by creating Dockerfiles for both frontend and backend components.
   - Use Docker Compose to manage multi-container Docker applications and define services.

5. **Setting Up Pipelines with GitHub Actions**:

   - Set up CI/CD pipelines using GitHub Actions to automate the build, test, and deployment processes.
   - Define workflow files to trigger actions based on events such as pull requests or manual triggers.
   - Incorporate Docker build and push steps into the pipeline to build and publish Docker images.

6. **Further Scenarios to Consider**:

   - Enable users to compare their sleep data with others' to identify trends or patterns.
   - Determine the level of privacy for user data and implement appropriate access controls and permissions.
   - Consider implementing features such as sleep goal setting, personalised recommendations for improving sleep quality, or integration with wearable devices for automated data tracking.
   - Continuously gather user feedback and iterate on the application to address usability issues, performance concerns, and feature requests.

7. **Documentation and User Education**:
   - Provide comprehensive documentation for users on how to use the application, including features, navigation, and troubleshooting tips.
   - Educate users on the importance of sleep tracking and how to interpret the data provided by the application to make informed decisions about their sleep habits and overall health.

## Contributors

- [Monika Mistry](https://github.com/Monika-Mistry)
