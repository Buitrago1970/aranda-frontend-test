import React from 'react'
import Navbar from '../components/Navbar'
import HeroImage from '../components/HeroImage'
import Options from '../components/Options'
import NewReipes from '../components/NewRecipes'

export default function homePage() {
  return (
    <>
    <Navbar/>
    <HeroImage/>
    <Options/>
    <NewReipes/>
    </>
  )
}
