import {useContext} from 'react'
import Header from '../components/Header'
import HeroImage from '../components/HeroImage'
import Options from '../components/Options'
import NewReipes from '../components/NewRecipes'
import Sponsorship from '../components/Sponsorship'
import { useQuery } from 'react-query'
import axios from 'axios'
import { AppContext } from '../context/AppContext'

export default function HomePage() {

  const state = useContext(AppContext);
  const { setRecipes } = useContext(AppContext);

  const { data, status } = useQuery<{recipes: any[]}>(['randomRecipes', async () => {
    const response = await axios.get(
        'https://api.spoonacular.com/recipes/random?number=4&apiKey=3c4d9997a2954bbcad4b11794720ee4b'
    )
    return response.data
  }], {
    cacheTime: 1000 * 60 * 60, // 1 hora de cache
    staleTime: 1000 * 30, // 30 segundos de stale time
    onSuccess: (data) => {
      setRecipes(data.recipes)
    },
    onError: (error) => {
      console.log(error)
    }
  });
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
