import React from 'react'

import "../scss/components/header.scss"


export default function Navbar() {
  return (
    <header>
      <nav>
        <div className='cointainer-logo'>
          {/* <a href="/">
            <p>Recipe</p>
            <p>App</p>
          </a> */}
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
    
       
          </nav>
    </header>
  )
}
