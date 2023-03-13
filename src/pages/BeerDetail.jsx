import React from 'react'
import axios from 'axios'
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function BeerDetail() {
  const { beerId } = useParams();
  const [beer, setBeer] = useState(null);

  const getBeer = async () => {
    try {
      const response = await axios.get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`);
      setBeer(response.data);
    } catch (error) {
    }
  };

  useEffect(() => {
    getBeer();
  }, []);

  return (
    <div>
      {beer && (
        <div className="beer__detail-card">
        <h1>{beer.name}</h1>
          <img src={beer.image_url} alt={beer.name} />
          <div className="beer__detail-content">
            <p>{beer.tagline}</p>
            <p>First brewed:{beer.first_brewed}</p>
            <p>Attenuation Level:{beer.attenuation_level}</p>
            <p>Description: {beer.description}</p>
            <p>Creator: {beer.contributed_by}</p>
          </div>
        </div>
      )}
    </div>
  );
}
