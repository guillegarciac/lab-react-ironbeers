import React from 'react'
import axios from 'axios';
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function Beers() {
  const [beers, setBeers] = useState(null);

  const getBeers = async () => {
    try {
      const response = await axios.get(
        "https://ih-beers-api2.herokuapp.com/beers"
      );
      setBeers(response.data);
    } catch (error) {}
  };

  useEffect(() => {
    getBeers();
  }, []);

  const truncate = (str, n) => {
    return str?.length > n ? str.substring(0, n - 1) + "..." : str;
  };

  return (
    <div>
      <h1>All Beers</h1>
      {beers &&
        beers.map((beer) => {
          return (
            <Link
              className="beer__link"
              key={beer._id}
              to={`/all-beers/${beer._id}`}
            >
              <div className="beer__card">
                <img src={beer.image_url} alt={beer.name} />
                <div className="beer__card-content">
                  <h2>{truncate(beer.name, 20)}</h2>
                  <p>{truncate(beer.tagline, 150)}</p>
                  <p>Creator: {truncate(beer.contributed_by, 30)}</p>
                </div>
              </div>
            </Link>
          );
        })}
    </div>
  );
}
