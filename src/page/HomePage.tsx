import React from 'react'
import Navbar from '../components/Navbar'
import HeroImage from '../components/HeroImage'
import Options from '../components/Options'
import NewReipes from '../components/NewRecipes'
import Sponsorship from '../components/Sponsorship'

export default function homePage() {
  return (
    <>
    <Navbar/>
    <HeroImage/>
    <Options/>
    <NewReipes/>
    <Sponsorship/>
    </>
  )
}
