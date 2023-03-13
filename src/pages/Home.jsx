import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <nav>
        <NavLink to='/all-beers'>All</NavLink>
        <NavLink to='/random-beer'>Random</NavLink>
        <NavLink to='/new-beer'>New</NavLink>
      </nav>
    </div>
  )
}
