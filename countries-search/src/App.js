import { useEffect, useState } from "react";
import "./App.css";
import Card from "./components/card/Card";
import axios from "axios";

const App = () => {
  const [query, setQuery] = useState("");
  const [allCountries, setAllCountries] = useState([]);
  const [displayedCountries, setDisplayedCountries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getCountries = async (retryCount = 3) => {
    try {
      setLoading(true);
      setError(null); // Clear previous errors
      const response = await axios.get("https://restcountries.com/v3.1/all", {
        timeout: 20000, // Set a longer timeout limit of 20 seconds
      });
      setAllCountries(response.data);
    } catch (err) {
      console.error(err.message);
    } finally {
      setLoading(false);
    }
  };

  const filterCountries = (query) => {
    setDisplayedCountries(
      query
        ? allCountries.filter((country) =>
            country.name.common
              .toLowerCase()
              .includes(query.trim().toLowerCase())
          )
        : allCountries
    );
  };

  useEffect(() => {
    getCountries();
  }, []);

  useEffect(() => {
    filterCountries(query);
  }, [query, allCountries]);

  return (
    <>
      <header>
        <input
          type="text"
          placeholder="Search for countries..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </header>
      <main className="container">
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>{error}</p>
        ) : (
          displayedCountries.map((country) => (
            <article className="cardWrapper" key={country.name.common}>
              <Card
                flag={country.flags.png}
                name={country.name.common}
                alt={country.flags.alt || country.name.common}
              />
            </article>
          ))
        )}
      </main>
    </>
  );
};

export default App;
