# CountriesSearch
CountriesSearch: A React-based web interface displaying flags and names of countries with search functionality

## Table of Contents

- [Features](#features)
- [Demo](#demo)
- [Installation](#installation)
- [Usage](#usage)
- [Code Overview](#code-overview)

## Features

- Fetches data from the REST Countries API
- Displays a list of countries with their flags
- Search functionality to filter countries by name
- Handles loading and error states

## Demo

You can try the live demo [here](https://countries-search-mocha.vercel.app/).

## Installation

To run this project locally, follow these steps:

1. Clone the repository:
    ```bash
    git clone https://github.com/TST14/CountriesSearch.git
    cd countries-search
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Start the development server:
    ```bash
    npm start
    ```

4. Open your browser and navigate to `http://localhost:3000` to see the application in action.

## Usage

### Search
- Type the name of a country in the search bar to filter the list of displayed countries.

### Display
- The application displays a list of country cards, each showing the country's flag and name.

## Code Overview

### App.js

This is the main component of the application. It fetches the list of countries from the REST Countries API, handles the search functionality, and manages loading and error states.

- **State Variables**:
  - `query`: Stores the current search query.
  - `allCountries`: Stores the complete list of countries fetched from the API.
  - `displayedCountries`: Stores the list of countries to be displayed based on the search query.
  - `loading`: Indicates whether data is being fetched from the API.
  - `error`: Stores any error messages encountered during the API request.

- **Functions**:
  - `getCountries`: Fetches the list of countries from the API.
  - `filterCountries`: Filters the list of countries based on the search query.

- **Effects**:
  - `useEffect` to fetch the countries when the component mounts.
  - `useEffect` to filter the countries whenever the search query or the list of all countries changes.

### Card Component

Located in `components/card/Card.js`, this component is responsible for displaying individual country information (flag and name).

### App.css

This file contains styles for the application, including layout and styling for the search input and country cards.

- **Styles**:
  - `header`: Styles for the header containing the search input.
  - `container`: Styles for the main container displaying country cards.
  - `cardWrapper`: Styles for individual country card wrappers.


