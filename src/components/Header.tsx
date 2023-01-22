import React from 'react'

import houseIcon from '../assets/icons/ic_home.svg'



export default function Navbar() {
  return (
    <header>
      <nav>
        <div className='cointainer-logo'>
            <p className='recipe'>Recipe</p>
            <p className='app'>App</p>
        </div>
        
        <ul className='cointainer-nav-link'>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">Vegetarianos</a>
          </li>
          <li>
            <a href="/contact">Platos Principales</a>
          </li>
          <li>
            <a href="/contact">Tortas</a>
          </li>
          <li>
            <a href="/contact">Comida Rápida </a>
          </li>
          <li>
            <a href="/contact">Menú Niños</a>
          </li>
          <li>
            <a href="/contact">Sopas</a>
          </li>
          </ul>
          <div className='house-icon'>
            <a href='/'>
              <img src={houseIcon} alt="house icon"/>
            </a>
          </div>
          </nav>
    </header>
  )
}
