import { useEffect, useState } from "react";
import "./App.css";
import Card from "./components/card/Card";
import axios from "axios";

const App = () => {
  const [query, setQuery] = useState("");
  const [allCountries, setAllCountries] = useState([]);
  const [displayedCountries, setDisplayedCountries] = useState([]);
  const [loading, setLoading] = useState(false);

  const getCountries = async () => {
    try {
      setLoading(true);
      const response = await axios.get("https://restcountries.com/v3.1/all");
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
