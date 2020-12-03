# Movie Explorer
This project is a toy project that makes use of the [The Movie Database API](https://www.themoviedb.org/) to allow users to search for a movie, see its details, and vote.

## Table of Contents
* [Core Technologies Used](#technologies)
* [Getting Started on the server](#getting-started-on-the-server)
* [Getting Started on the client](#getting-started-on-the-client)
* [Running Tests](#running-tests)
* [Other Scripts](#other-scripts)
* [Planned Improvements](#planned-improvements)
* [Learn More About Create React App](#learn-more-about-create-react-app)

## Technologies Used

This app is created with the following technologies:
### Frontend

- React version: 17.0.1 --- Bootstrapped with [Create React App](#learn-more-about-create-react-app)
- Axios version: 0.21.0
- React-router-dom version: 5.2.0
- Bootstrap version: 4.5.3 and React-bootstrap version: 1.4.0 for core layout
- Node-SASS version: 4.14.1 for custom SCSS
- React Testing Library

### Backend

- Express.js version: 4.17.1
- Axios version: 0.21.0
- Node Postgress version: 8.5.1 - PostgreSQL client for node
- Supertest

For data this app relies on:
- [The Movie Database API](https://www.themoviedb.org/)

## Getting Started on the server

### **IMPORTANT: This project requires an API key for The Movie Database which is not included in this repo. Please follow the instructions below to obtain one and include it in the correct file.**

### **This project assumes you have PostgreSQL installed locally.**

1. Clone the repository

From the project root directory in the terminal, input the following commands:

2. `cd server`
3. `npm install` to install the necessary dependencies.
4. `createdb movieapi` to create the main database.
5. `createdb movieapi-test` to create the testing database.
6. `psql movieapi < data.sql` to set up the databases
7. `psql movieapi-test < data.sql`
8. Create a `.env` file to contain your API key.
9. Add `API_KEY=yourAPIkey` to the `.env` file. If you need to obtain an API key, you can do so [here](https://developers.themoviedb.org/3/getting-started/introduction). If you are assessing my project, and would prefer to use my API key, please get in touch and I can send it to you privately.
10. `npm start` to start the server, which should start at `localhost:3001`

## Getting Started on the client

From the project root directory in the terminal, input the following commands:

1. `cd frontend`
2. `npm install` to install the necessary dependencies.
3. `npm start` to start the client in development mode.
4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

[**For more about Create React App and the functionality it provides see the bottom of this document**](#learn-more-about-create-react-app)

## Running Tests

To run tests on the client:

1. From the frontend directory in the terminal `npm test` to run all test suites or `npm test filepath` if you'd like to run only one test file. This will continue to listen for changes and re-run tests. To quit out press `Ctrl+C`

To run tests on the server:

1. Front the server directory in the terminal `npm test`.

## Planned Improvements
* Improved client side error handling
* Improved server side error handling
* Route specific nav bar rendering - specifically no search in navbar on homepage
* Responsive styling
* Screen-reader accessibility
* Add list of related movies to Movie Detail page
* Storage of past queries, so navigating back will show you results of previous searches. Currently navigating back will bring you back to the previous pages, but display the most recent search results.
* Consider implementing a restriction to the number of votes a visitor to the page can give to a movie.

## Other Available Scripts

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More About Create React App

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
