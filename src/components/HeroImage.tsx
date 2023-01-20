import React from 'react'

import Image from "../assets/bcq.jpg"

export default function HeroImage() {
  return (
    <div className='hero'>
      <img src={Image} alt="Hero Image" />
    </div>
  )
}