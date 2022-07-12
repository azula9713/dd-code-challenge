# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### API Usage

Mainly data is fetched using "https://www.dnd5eapi.co/api/" endpoint.
In this project both REST API and GraphQL API are used.

REST API is configured and accessed through Axios and it is mainly used to fetch in detail data of each spells.
GraphQl is used to fetch more generic data that are list of all Spells as well as list of Spell categories, etc.
Apollo Cilent is used to fetch data from GraphQL API.

### State Management

Recoil has been used as the state management library in order to access values throughout the applciatin.
Since its more efficient and lighter than Redux, I have used recoil as my state management library.

### Styling

Tailwind CSS is used through the entire application for all style management.
