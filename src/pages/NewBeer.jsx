import React from 'react'
import axios from 'axios'
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function NewBeer() {
  const initialState = {
    name: "",
    tagline: "",
    description: "",
    first_brewed: "",
    brewer_tips: "",
    attenuation_level: "",
    contributed_by: "",
  };

  const [newBeer, setNewBeer] = useState(initialState);

  const handleChange = (e) => {
    setNewBeer((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const body = {
      name: newBeer.name,
      tagline: newBeer.tagline,
      description: newBeer.description,
      first_brewed: newBeer.first_brewed,
      brewer_tips: newBeer.brewer_tips,
      attenuation_level: parseInt(newBeer.attenuation_level),
      contributed_by: newBeer.contributed_by,
    }
    try {
      await axios.post("https://ih-beers-api2.herokuapp.com/beers/new", body);
      navigate("/all-beers");
    } catch (error) {
    }
  };

  return (
    <div className="new__beer-form">
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          name="name"
          required
          type="text"
          onChange={handleChange}
          value={newBeer.name}
        />
        <label>Tagline</label>
        <input
          name="tagline"
          required
          type="text"
          onChange={handleChange}
          value={newBeer.tagline}
        />
        <label>Description</label>
        <input
          name="description"
          required
          type="text"
          onChange={handleChange}
          value={newBeer.description}
        ></input>
        <label>First brewed</label>
        <input
          name="first_brewed"
          required
          type="text"
          onChange={handleChange}
          value={newBeer.first_brewed}
        />
        <label>Brewer tips</label>
        <input
          name="brewer_tips"
          required
          type="text"
          onChange={handleChange}
          value={newBeer.brewer_tips}
        />
        <label>Attenuation level</label>
        <input
          name="attenuation_level"
          required
          type="number"
          onChange={handleChange}
          value={newBeer.attenuation_level}
        />
        <label>Contributed by</label>
        <input
          name="contributed_by"
          required
          type="text"
          onChange={handleChange}
          value={newBeer.contributed_by}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};
