import Cards from "./Cards";
import Map from "./Map";
import Startpage from "./Startpage";
import React, { useEffect, useState } from "react";

function SearchResults() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/restaurants")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <>
      <Startpage />
      <h1>Hello Wolrd</h1>

      <div className="searchResults">
        <h2>Search Results</h2>
        <ul>
          {data.map((restaurant) => (
            <li key={restaurant.id}>{restaurant.name}</li>
          ))}
        </ul>
        <Cards />
        <Map />
      </div>
    </>
  );
}

export default SearchResults;
