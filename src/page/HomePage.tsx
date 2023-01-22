import React,{useContext, useState, useEffect} from 'react'
import Header from '../components/Header'
import HeroImage from '../components/HeroImage'
import Options from '../components/Options'
import NewReipes from '../components/NewRecipes'
import Sponsorship from '../components/Sponsorship'
import { useQuery } from 'react-query'
import axios from 'axios'
import { AppContext } from '../context/AppContext'

export default function HomePage() {

  // const state = useContext(AppContext) 
  const [recipes, setRecipes] = useState([])
 
  const { data, status } = useQuery('randomRecipes', async () => {
    const response = await axios.get(
        'https://api.spoonacular.com/recipes/random?number=4&apiKey=50ec4a4303164ffabf9abc63a5ddcb96'
    )
    return response.data
  })
  useEffect(() => {
     if(status === 'success') {
         setRecipes(data.recipes)
     }
  }, [status, data])

  return (
    <>
    <Header/>
    <HeroImage/>
    <Options/>
    <NewReipes />
    <Sponsorship/>
    </>
  )
}
